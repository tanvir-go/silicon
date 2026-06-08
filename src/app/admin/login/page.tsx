"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Terminal, AlertTriangle, ShieldCheck } from "lucide-react";
import { db, isConfigured } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("scl_admin_token") === "authenticated") {
        router.push("/admin/dashboard");
      }
    }

    // Seed default admins to Firestore if configured
    const seedAdmins = async () => {
      if (isConfigured) {
        try {
          const defaultAdminRef = doc(db, "admins", "admin@silicon.com");
          const defaultAdminDoc = await getDoc(defaultAdminRef);
          if (!defaultAdminDoc.exists()) {
            await setDoc(doc(db, "admins", "admin@silicon.com"), {
              email: "admin@silicon.com",
              password: "admin123",
              name: "MD Nasir Feroz",
              role: "Super Administrator"
            });
          }

          const superAdminRef = doc(db, "admins", "silicon.website.bd@gmail.com");
          const superAdminDoc = await getDoc(superAdminRef);
          if (!superAdminDoc.exists()) {
            await setDoc(doc(db, "admins", "silicon.website.bd@gmail.com"), {
              email: "silicon.website.bd@gmail.com",
              password: "Silicon@2026",
              name: "Nasir Feroz",
              role: "Super Administrator"
            });
          }
        } catch (e) {
          console.error("Failed to seed admins:", e);
        }
      }
    };
    seedAdmins();
  }, [router]);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    setLoading(true);
 
    if (isConfigured) {
      try {
        const adminDocRef = doc(db, "admins", email.trim().toLowerCase());
        const adminDoc = await getDoc(adminDocRef);
 
        if (adminDoc.exists()) {
          const adminData = adminDoc.data();
          if (adminData.password === password) {
            setSuccess(true);
            if (typeof window !== "undefined") {
              sessionStorage.setItem("scl_admin_token", "authenticated");
              sessionStorage.setItem("scl_admin_user", JSON.stringify({
                name: adminData.name || "Administrator",
                email: adminData.email,
                role: adminData.role || "Super Administrator"
              }));
            }
            setTimeout(() => {
              router.push("/admin/dashboard");
            }, 1000);
            return;
          }
        }
        setError("Invalid administrative credentials. Please check and try again.");
        setLoading(false);
        return;
      } catch (err) {
        console.error("Firebase auth check failed:", err);
      }
    }
 
    // Fallback: Simulated network delay
    setTimeout(() => {
      if (email.trim().toLowerCase() === "admin@silicon.com" && password === "admin123") {
        setSuccess(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("scl_admin_token", "authenticated");
          sessionStorage.setItem("scl_admin_user", JSON.stringify({
            name: "MD Nasir Feroz",
            email: "admin@silicon.com",
            role: "Super Administrator"
          }));
        }
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 1000);
      } else {
        setError("Invalid administrative credentials. Please check and try again.");
        setLoading(false);
      }
    }, 1200);
  };

  const handleAutofill = () => {
    setEmail("admin@silicon.com");
    setPassword("admin123");
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center relative overflow-hidden p-4">
      {/* Subtle modern background curves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F2C59]/5 rounded-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0F2C59]/5 rounded-full blur-3xl -z-10 opacity-70"></div>

      <div className="w-full max-w-md z-10">
        {/* Brand Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#0F2C59] shadow-md shadow-[#0F2C59]/10 mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">
            SILICON COMPUTING LTD
          </h1>
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            Enterprise Admin Core Console
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xl relative overflow-hidden">
          {success ? (
            <div className="py-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 border border-green-100 animate-bounce">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Access Granted</h2>
              <p className="text-slate-500 text-sm">Synchronizing dashboard operations...</p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800 text-xs">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                  Console Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-4 focus:ring-[#0F2C59]/5 transition-all duration-200"
                    placeholder="name@siliconcomputing.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Security Key
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4.5 h-4.5" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0F2C59] focus:bg-white rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-4 focus:ring-[#0F2C59]/5 transition-all duration-200"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0F2C59] hover:bg-[#0b2143] text-white rounded-xl py-3 text-sm font-semibold tracking-wide shadow-md shadow-[#0F2C59]/10 focus:outline-none focus:ring-4 focus:ring-[#0F2C59]/5 active:scale-98 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Authenticating Node...
                  </>
                ) : (
                  <>
                    <Terminal className="w-4 h-4" />
                    Initialize Connection
                  </>
                )}
              </button>
            </form>
          )}


        </div>

        {/* Footer info */}
        <p className="text-center text-slate-400 text-xs mt-6">
          © {new Date().getFullYear()} Silicon Computing Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
