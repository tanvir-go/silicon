import { NextResponse } from "next/server";
import { db, isConfigured } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { shopProducts } from "@/data/mockProducts";

function extractProductsFromLdJson(obj: any): any[] {
  if (!obj) return [];
  let results: any[] = [];
  if (Array.isArray(obj)) {
    for (const item of obj) {
      results = results.concat(extractProductsFromLdJson(item));
    }
    return results;
  }
  if (typeof obj === "object") {
    if (obj["@type"] === "Product" || obj["@type"]?.includes("Product")) {
      results.push(obj);
    }
    if (obj["@graph"] && Array.isArray(obj["@graph"])) {
      for (const item of obj["@graph"]) {
        results = results.concat(extractProductsFromLdJson(item));
      }
    }
    if (obj["itemListElement"] && Array.isArray(obj["itemListElement"])) {
      for (const element of obj["itemListElement"]) {
        if (element.item) {
          results = results.concat(extractProductsFromLdJson(element.item));
        } else if (element["@type"] === "Product") {
          results.push(element);
        }
      }
    }
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === "object" && key !== "itemListElement" && key !== "@graph") {
        results = results.concat(extractProductsFromLdJson(obj[key]));
      }
    }
  }
  return results;
}

function mapJsonLdProduct(jsonLd: any, targetUrl: string): any {
  let title = jsonLd.name || "";
  let description = jsonLd.description || "";
  let brand = "";
  if (jsonLd.brand) {
    brand = typeof jsonLd.brand === "string" ? jsonLd.brand : jsonLd.brand.name || "";
  }
  if (!brand) {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("hp")) brand = "HP Enterprise";
    else if (lowerTitle.includes("dell")) brand = "Dell Technologies";
    else if (lowerTitle.includes("cisco")) brand = "Cisco Systems";
    else if (lowerTitle.includes("lenovo")) brand = "Lenovo Enterprise";
    else brand = "Silicon Partner";
  }

  let price = 0;
  if (jsonLd.offers) {
    const offers = jsonLd.offers;
    if (Array.isArray(offers)) {
      price = Number(offers[0].price);
    } else {
      price = Number(offers.price);
    }
  }
  if (!price) {
    price = Math.floor(Math.random() * (450000 - 85000 + 1)) + 85000;
  }

  let image = "";
  if (jsonLd.image) {
    if (Array.isArray(jsonLd.image)) {
      image = jsonLd.image[0];
    } else if (typeof jsonLd.image === "object") {
      image = jsonLd.image.url || "";
    } else {
      image = jsonLd.image;
    }
  }
  if (image && !image.startsWith("http")) {
    try {
      const urlObj = new URL(targetUrl);
      image = new URL(image, urlObj.origin).href;
    } catch (_) {}
  }
  if (!image) {
    image = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800";
  }

  const features: string[] = [];
  if (jsonLd.additionalProperty && Array.isArray(jsonLd.additionalProperty)) {
    jsonLd.additionalProperty.slice(0, 5).forEach((p: any) => {
      if (p.name && p.value) {
        features.push(`${p.name}: ${p.value}`);
      }
    });
  }
  if (features.length === 0) {
    features.push("Enterprise grade hardware diagnostic testing", "High performance throughput node", "Authorized merchant warranty");
  }

  let category = "Compute";
  const textToAnalyze = `${title} ${description}`.toLowerCase();
  if (textToAnalyze.includes("switch") || textToAnalyze.includes("router") || textToAnalyze.includes("networking") || textToAnalyze.includes("cisco") || textToAnalyze.includes("ethernet") || textToAnalyze.includes("accessories")) {
    category = "Networking";
  } else if (textToAnalyze.includes("storage") || textToAnalyze.includes("ssd") || textToAnalyze.includes("drive") || textToAnalyze.includes("nas") || textToAnalyze.includes("san")) {
    category = "Storage";
  } else if (textToAnalyze.includes("license") || textToAnalyze.includes("software") || textToAnalyze.includes("os") || textToAnalyze.includes("subscription") || textToAnalyze.includes("window")) {
    category = "Software";
  }

  return {
    title: title.trim() || "Crawled Product",
    brand: brand.trim() || "Silicon Partner",
    price: Number(price) || 120000,
    category,
    shortDesc: description.substring(0, 180).trim() || "Automated catalog import configuration.",
    image,
    rating: 4.8,
    features
  };
}

function decodeHtml(html: string): string {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 });
  }

  // 1. Check if the URL belongs to our own B2B shop catalog
  try {
    const isRelative = targetUrl.startsWith("/");
    const urlObj = new URL(isRelative ? `http://localhost${targetUrl}` : targetUrl);
    const isOwnShop = urlObj.hostname.includes("silicon.com.bd") || 
                      urlObj.hostname.includes("localhost") || 
                      urlObj.hostname.includes("127.0.0.1") ||
                      isRelative;

    if (isOwnShop) {
      const parts = urlObj.pathname.split("/").filter(Boolean);
      const possibleSlug = parts[parts.length - 1];

      // Detect own shop category page
      const isCategoryPage = urlObj.pathname.includes("product-category") || 
                             urlObj.pathname.includes("collections") || 
                             urlObj.pathname.includes("shop") || 
                             !possibleSlug || 
                             possibleSlug === "product" || 
                             possibleSlug === "collections" || 
                             possibleSlug === "product-category";

      if (isCategoryPage) {
        let filtered = shopProducts;
        const lowerPath = urlObj.pathname.toLowerCase();
        if (lowerPath.includes("networking") || lowerPath.includes("switch") || lowerPath.includes("router") || lowerPath.includes("accessories")) {
          filtered = shopProducts.filter(p => p.category === "Networking");
        } else if (lowerPath.includes("compute") || lowerPath.includes("server")) {
          filtered = shopProducts.filter(p => p.category === "Compute");
        } else if (lowerPath.includes("storage") || lowerPath.includes("ssd") || lowerPath.includes("drive")) {
          filtered = shopProducts.filter(p => p.category === "Storage");
        } else if (lowerPath.includes("software") || lowerPath.includes("license")) {
          filtered = shopProducts.filter(p => p.category === "Software");
        }

        return NextResponse.json({
          type: "multiple",
          products: filtered.map(p => ({
            title: p.title,
            brand: p.brand,
            price: p.price,
            category: p.category,
            shortDesc: p.shortDesc,
            image: p.image,
            rating: p.rating,
            features: p.features
          }))
        });
      }
      
      if (possibleSlug && possibleSlug !== "product" && possibleSlug !== "collections" && possibleSlug !== "product-category") {
        // Query Firestore first if configured
        if (isConfigured) {
          try {
            const docRef = doc(db, "products", possibleSlug);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const data = docSnap.data();
              return NextResponse.json({
                title: data.title || "Crawled Asset",
                brand: data.brand || "Silicon Partner",
                price: Number(data.price) || 0,
                category: data.category || "Compute",
                shortDesc: data.shortDesc || "",
                image: data.image || "",
                rating: Number(data.rating) || 4.8,
                features: data.features || []
              });
            }
          } catch (fireErr) {
            console.error("Firestore lookup failed for crawled slug:", fireErr);
          }
        }

        // Fallback to local mock products
        const mockProduct = shopProducts.find(p => p.id === possibleSlug || p.id.includes(possibleSlug) || possibleSlug.includes(p.id));
        if (mockProduct) {
          return NextResponse.json({
            title: mockProduct.title,
            brand: mockProduct.brand,
            price: mockProduct.price,
            category: mockProduct.category,
            shortDesc: mockProduct.shortDesc,
            image: mockProduct.image,
            rating: mockProduct.rating,
            features: mockProduct.features
          });
        }

        // Dynamic Generator: If the slug doesn't exist, build a valid product catalog template from it
        const cleanTitle = possibleSlug
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        let guessedBrand = "Silicon Partner";
        const lowerSlug = possibleSlug.toLowerCase();
        if (lowerSlug.includes("cisco")) guessedBrand = "Cisco Systems";
        else if (lowerSlug.includes("hpe") || lowerSlug.includes("hp")) guessedBrand = "HP Enterprise";
        else if (lowerSlug.includes("dell")) guessedBrand = "Dell Technologies";
        else if (lowerSlug.includes("lenovo")) guessedBrand = "Lenovo Enterprise";

        let guessedCategory = "Compute";
        if (lowerSlug.includes("switch") || lowerSlug.includes("router") || lowerSlug.includes("network") || lowerSlug.includes("cable") || lowerSlug.includes("accessories")) {
          guessedCategory = "Networking";
        } else if (lowerSlug.includes("storage") || lowerSlug.includes("ssd") || lowerSlug.includes("drive") || lowerSlug.includes("sas") || lowerSlug.includes("sata")) {
          guessedCategory = "Storage";
        } else if (lowerSlug.includes("license") || lowerSlug.includes("software") || lowerSlug.includes("os") || lowerSlug.includes("windows")) {
          guessedCategory = "Software";
        }

        return NextResponse.json({
          title: cleanTitle,
          brand: guessedBrand,
          price: Math.floor(Math.random() * (450000 - 8500 + 1)) + 85000,
          category: guessedCategory,
          shortDesc: `Automated import of ${cleanTitle} configuration. Specifications pre-populated from catalog path.`,
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
          rating: 4.8,
          features: [
            "Enterprise grade diagnostics enabled",
            "High availability computing nodes support",
            "Certified local warranty & support in Bangladesh"
          ]
        });
      }
    }
  } catch (urlErr) {
    console.error("Own shop URL parsing/lookup failed:", urlErr);
  }

  try {
    let absoluteUrl = targetUrl;
    if (targetUrl.startsWith("/")) {
      const requestUrlObj = new URL(request.url);
      absoluteUrl = `${requestUrlObj.origin}${targetUrl}`;
    }

    const response = await fetch(absoluteUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch website: ${response.status} ${response.statusText}` }, { status: 400 });
    }

    const html = await response.text();

    // 1. Try to extract JSON-LD (application/ld+json)
    let jsonLdProducts: any[] = [];
    const jsonLdRegex = /<script\s+type=["']application\/ld\+json["'][\s\S]*?>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        const rawJson = match[1].trim();
        const parsed = JSON.parse(rawJson);
        const extracted = extractProductsFromLdJson(parsed);
        if (extracted.length > 0) {
          jsonLdProducts = jsonLdProducts.concat(extracted);
        }
      } catch (e) {
        // ignore parse errors
      }
    }

    // If we have multiple products from JSON-LD, return them
    if (jsonLdProducts.length >= 2) {
      const mappedProducts = jsonLdProducts.map(p => mapJsonLdProduct(p, absoluteUrl)).filter(p => p.title);
      if (mappedProducts.length >= 2) {
        return NextResponse.json({
          type: "multiple",
          products: mappedProducts.slice(0, 15)
        });
      }
    }

    // 2. Extractor fallback: HTML heuristic image & text scanner
    const imgTagRegex = /<img\s+([^>]*?)>/gi;
    const srcRegex = /src=["']([^"']+)["']/i;
    const altRegex = /alt=["']([^"']+)["']/i;
    const hrefRegex = /href=["']([^"']+)["']/i;
    
    let imgMatch;
    const candidates: any[] = [];
    const seenTitles = new Set<string>();
    
    while ((imgMatch = imgTagRegex.exec(html)) !== null && candidates.length < 30) {
      const attrs = imgMatch[1];
      const srcM = srcRegex.exec(attrs);
      const altM = altRegex.exec(attrs);
      
      if (srcM && altM) {
        const src = srcM[1];
        const alt = decodeHtml(altM[1].trim());
        
        if (
          alt.length < 12 || 
          seenTitles.has(alt) ||
          alt.toLowerCase().includes("logo") ||
          alt.toLowerCase().includes("banner") ||
          alt.toLowerCase().includes("icon") ||
          alt.toLowerCase().includes("avatar") ||
          src.includes("logo") ||
          src.includes("icon") ||
          src.includes("avatar")
        ) {
          continue;
        }

        seenTitles.add(alt);
        
        // Grab local 500 characters around the image tag to look for details
        const startIndex = Math.max(0, imgMatch.index - 300);
        const endIndex = Math.min(html.length, imgMatch.index + 500);
        const context = html.substring(startIndex, endIndex);
        
        // Find price near this image context
        let price = 0;
        const priceRegexes = [
          /(?:৳|Tk|TK|BDT|Tk\.|&nbsp;৳)\s*([\d,]+)/i,
          /class="[^"]*price[^"]*"[^>]*>\s*([\d,]+)/i,
          /price["']?\s*:\s*([\d.]+)/i,
          /\b([\d,]{4,9})\s*(?:Taka|Tk|৳|BDT)/i,
          /\b([\d,]{4,9})\s*৳/
        ];
        
        for (const pr of priceRegexes) {
          const pm = pr.exec(context);
          if (pm) {
            const cleanPrice = parseFloat(pm[1].replace(/,/g, ""));
            if (cleanPrice > 100) {
              price = cleanPrice;
              break;
            }
          }
        }
        
        if (!price) {
          price = Math.floor(Math.random() * (450000 - 85000 + 1)) + 85000;
        }

        let category = "Compute";
        const textToAnalyze = alt.toLowerCase();
        if (textToAnalyze.includes("switch") || textToAnalyze.includes("router") || textToAnalyze.includes("networking") || textToAnalyze.includes("cisco") || textToAnalyze.includes("ethernet") || textToAnalyze.includes("accessories")) {
          category = "Networking";
        } else if (textToAnalyze.includes("storage") || textToAnalyze.includes("ssd") || textToAnalyze.includes("drive") || textToAnalyze.includes("nas") || textToAnalyze.includes("san")) {
          category = "Storage";
        } else if (textToAnalyze.includes("license") || textToAnalyze.includes("software") || textToAnalyze.includes("os") || textToAnalyze.includes("subscription") || textToAnalyze.includes("window")) {
          category = "Software";
        }

        let brand = "Silicon Partner";
        if (textToAnalyze.includes("hp")) brand = "HP Enterprise";
        else if (textToAnalyze.includes("dell")) brand = "Dell Technologies";
        else if (textToAnalyze.includes("cisco")) brand = "Cisco Systems";
        else if (textToAnalyze.includes("lenovo")) brand = "Lenovo Enterprise";

        let href = "";
        const hrefM = hrefRegex.exec(context);
        if (hrefM) {
          href = hrefM[1];
          if (href.startsWith("/")) {
            try {
              const targetUrlObj = new URL(absoluteUrl);
              href = `${targetUrlObj.origin}${href}`;
            } catch (_) {}
          }
        }

        let absImage = src;
        if (!src.startsWith("http")) {
          try {
            const targetUrlObj = new URL(absoluteUrl);
            absImage = new URL(src, targetUrlObj.origin).href;
          } catch (_) {}
        }

        candidates.push({
          title: alt,
          brand,
          price,
          category,
          shortDesc: `Multi-product listing import from ${new URL(absoluteUrl).hostname}. Specifications set from index path.`,
          image: absImage,
          rating: 4.8,
          features: ["Enterprise standard hardware deployment", "Authorized merchant warranty", "Certified local support ready"],
          url: href || absoluteUrl
        });
      }
    }

    if (candidates.length >= 2) {
      return NextResponse.json({
        type: "multiple",
        products: candidates.slice(0, 15)
      });
    }

    // Fallback: single product mode (either single JSON-LD or meta tag search)
    let singleProduct: any = null;
    if (jsonLdProducts.length === 1) {
      singleProduct = mapJsonLdProduct(jsonLdProducts[0], absoluteUrl);
    } else if (candidates.length === 1) {
      singleProduct = candidates[0];
    }

    if (singleProduct) {
      return NextResponse.json(singleProduct);
    }

    // Parse Meta/OG tags for a single product as final fallback
    const getMetaTag = (propertyOrName: string): string => {
      const regex = new RegExp(`<meta\\s+[^>]*?(?:property|name)=["']${propertyOrName}["'][^>]*?\\s+content=["']([^"']*)["']`, "i");
      const match = regex.exec(html);
      if (match) return decodeHtml(match[1]);
      
      const altRegex = new RegExp(`<meta\\s+[^>]*?content=["']([^"']*)["'][^>]*?\\s+(?:property|name)=["']${propertyOrName}["']`, "i");
      const altMatch = altRegex.exec(html);
      return altMatch ? decodeHtml(altMatch[1]) : "";
    };

    let title = "";
    const titleRegex = /<title[^>]*>([\s\S]*?)<\/title>/i;
    const titleMatch = titleRegex.exec(html);
    if (titleMatch) {
      title = decodeHtml(titleMatch[1].trim());
    }

    let productTitle = getMetaTag("og:title") || getMetaTag("twitter:title") || title || "Crawled Hardware Asset";
    let productDescription = getMetaTag("og:description") || getMetaTag("twitter:description") || getMetaTag("description") || "Automated catalog crawl import. Specifications pre-populated from metadata.";
    
    let productBrand = getMetaTag("og:brand") || getMetaTag("product:brand") || "";
    if (!productBrand) {
      const lowerTitle = productTitle.toLowerCase();
      if (lowerTitle.includes("hp")) productBrand = "HP Enterprise";
      else if (lowerTitle.includes("dell")) productBrand = "Dell Technologies";
      else if (lowerTitle.includes("cisco")) productBrand = "Cisco Systems";
      else if (lowerTitle.includes("lenovo")) productBrand = "Lenovo Enterprise";
      else productBrand = "Silicon Partner";
    }

    let productPrice = 0;
    const priceStr = getMetaTag("product:price:amount") || getMetaTag("og:price:amount") || "0";
    productPrice = parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
    if (!productPrice) {
      productPrice = Math.floor(Math.random() * (750000 - 150000 + 1)) + 150000;
    }

    let productImage = getMetaTag("og:image") || getMetaTag("twitter:image") || "";
    if (productImage && !productImage.startsWith("http")) {
      try {
        const urlObj = new URL(absoluteUrl);
        productImage = new URL(productImage, urlObj.origin).href;
      } catch (_) {}
    }
    if (!productImage) {
      productImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800";
    }

    const features: string[] = [];
    const liRegex = /<li>([\s\S]*?)<\/li>/gi;
    let liMatch;
    let count = 0;
    while ((liMatch = liRegex.exec(html)) !== null && count < 5) {
      const text = liMatch[1].replace(/<[^>]*>/g, "").trim();
      if (text && text.length > 8 && text.length < 90) {
        features.push(decodeHtml(text));
        count++;
      }
    }

    let category = "Compute";
    const textToAnalyze = `${productTitle} ${productDescription}`.toLowerCase();
    if (textToAnalyze.includes("switch") || textToAnalyze.includes("router") || textToAnalyze.includes("networking") || textToAnalyze.includes("cisco") || textToAnalyze.includes("ethernet")) {
      category = "Networking";
    } else if (textToAnalyze.includes("storage") || textToAnalyze.includes("ssd") || textToAnalyze.includes("drive") || textToAnalyze.includes("nas") || textToAnalyze.includes("san")) {
      category = "Storage";
    } else if (textToAnalyze.includes("license") || textToAnalyze.includes("software") || textToAnalyze.includes("os") || textToAnalyze.includes("subscription") || textToAnalyze.includes("window")) {
      category = "Software";
    }

    return NextResponse.json({
      title: productTitle.trim(),
      brand: productBrand.trim(),
      price: productPrice,
      category,
      shortDesc: productDescription.substring(0, 180).trim(),
      image: productImage,
      rating: 4.8,
      features: features.length > 0 ? features : ["Enterprise grade hardware diagnostics", "Active silicon computing guarantee", "24/7 technical node telemetry"]
    });

  } catch (error: any) {
    return NextResponse.json({ error: `Crawling failed: ${error.message}` }, { status: 500 });
  }
}
