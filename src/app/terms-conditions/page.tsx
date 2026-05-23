import React from "react";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 border-b border-slate-100 bg-[#F0F4F7]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#0F2C59] tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            The rules and guidelines for using our digital services.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-left text-slate-600 space-y-6">
          <h2 className="text-xl font-bold text-[#0F2C59]">1. Acceptance of Terms</h2>
          <p className="text-sm">By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, you must not use our services.</p>
          
          <h2 className="text-xl font-bold text-[#0F2C59]">2. Use of Services</h2>
          <p className="text-sm">You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services.</p>
          
          <h2 className="text-xl font-bold text-[#0F2C59]">3. Intellectual Property</h2>
          <p className="text-sm">All content included on the website, such as text, graphics, logos, and software, is the property of Silicon Computing Ltd and protected by international copyright laws.</p>
        </div>
      </section>
    </main>
  );
}
