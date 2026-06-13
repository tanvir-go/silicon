import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async headers() {
    return [
      {
        source: "/services/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/solution-by-product/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/solution-by-use-case/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/solution-by-industry/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/team/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/blog/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/industries/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
