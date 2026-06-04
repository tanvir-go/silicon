import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, writeBatch } from "firebase/firestore";
import { blogPostsData } from "../data/mockData";
import { shopProducts } from "../data/mockProducts";
import { 
  initialOrders, 
  initialCustomers, 
  initialSuppliers, 
  initialCoupons, 
  defaultSettings 
} from "../hooks/useAdminState";

const firebaseConfig = {
  apiKey: "AIzaSyBn-zlc9qrnAIqcUVyu8VaPtVW_pU2lNtw",
  authDomain: "silicon-website-283da.firebaseapp.com",
  projectId: "silicon-website-283da",
  storageBucket: "silicon-website-283da.firebasestorage.app",
  messagingSenderId: "389127727925",
  appId: "1:389127727925:web:9d9b60850f6603efc2ba7c",
  measurementId: "G-0R6S76NBDJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function runSeed() {
  console.log("Starting Firestore Seeding...");

  // 1. Seed Blogs
  console.log("Seeding Blogs...");
  for (const blog of blogPostsData) {
    await setDoc(doc(db, "blogs", blog.id), blog);
  }

  // 2. Seed Products
  console.log("Seeding Products...");
  for (const product of shopProducts) {
    await setDoc(doc(db, "products", product.id), product);
  }

  // 3. Seed Orders
  console.log("Seeding Orders...");
  for (const order of initialOrders) {
    await setDoc(doc(db, "orders", order.id), order);
  }

  // 4. Seed Customers
  console.log("Seeding Customers...");
  for (const customer of initialCustomers) {
    await setDoc(doc(db, "customers", customer.id), customer);
  }

  // 5. Seed Suppliers
  console.log("Seeding Suppliers...");
  for (const supplier of initialSuppliers) {
    await setDoc(doc(db, "suppliers", supplier.id), supplier);
  }

  // 6. Seed Coupons
  console.log("Seeding Coupons...");
  for (const coupon of initialCoupons) {
    await setDoc(doc(db, "coupons", coupon.id), coupon);
  }

  // 7. Seed Settings
  console.log("Seeding Settings...");
  await setDoc(doc(db, "settings", "general"), defaultSettings);

  // 8. Seed Admins
  console.log("Seeding Admins...");
  await setDoc(doc(db, "admins", "admin@silicon.com"), {
    email: "admin@silicon.com",
    password: "admin123",
    name: "MD Nasir Feroz",
    role: "Super Administrator"
  });
  await setDoc(doc(db, "admins", "silicon.website.bd@gmail.com"), {
    email: "silicon.website.bd@gmail.com",
    password: "Silicon@2026",
    name: "Nasir Feroz",
    role: "Super Administrator"
  });

  // 9. Seed Activities
  console.log("Seeding default activities...");
  const defaultActivities = [
    { id: "1", text: "Dashboard connected & synced to Google Firebase cloud database", time: "12:00 PM" },
    { id: "2", text: "Successfully loaded remote system Catalogs", time: "12:05 PM" }
  ];
  for (const act of defaultActivities) {
    await setDoc(doc(db, "activities", act.id), act);
  }

  console.log("Firestore Seeding Completed Successfully!");
  process.exit(0);
}

runSeed().catch((err) => {
  console.error("Error Seeding Firestore:", err);
  process.exit(1);
});
