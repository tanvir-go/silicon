import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 border-b border-slate-100 bg-[#F0F4F7]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#0F2C59] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Our commitment to protecting your data and privacy.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-left text-slate-600 space-y-6">
          <h2 className="text-xl font-bold text-[#0F2C59]">1. Information We Collect</h2>
          <p className="text-sm">We may collect personal information such as your name, email address, and company details when you interact with our services or request a consultation.</p>
          
          <h2 className="text-xl font-bold text-[#0F2C59]">2. How We Use Your Data</h2>
          <p className="text-sm">We use your data to provide, maintain, and improve our services, as well as to communicate with you regarding updates, offers, and support.</p>
          
          <h2 className="text-xl font-bold text-[#0F2C59]">3. Data Security</h2>
          <p className="text-sm">We implement advanced zero-trust architectures and encryption protocols to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </div>
      </section>
    </main>
  );
}
