"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import LiveChat from "@/components/LiveChat";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        <LoadingScreen />
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
      <BackToTop />
      <LiveChat />
    </>
  );
}
