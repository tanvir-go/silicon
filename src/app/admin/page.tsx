"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("scl_admin_token");
      if (token === "authenticated") {
        router.push("/admin/dashboard");
      } else {
        router.push("/admin/login");
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Redirecting to console node...</p>
      </div>
    </div>
  );
}
