import React from "react";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 border-b border-slate-100 bg-[#F0F4F7]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#0F2C59] tracking-tight mb-4">
            Latest News
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Stay up to date with the latest announcements, press releases, and corporate updates from Silicon Computing Ltd.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 font-semibold">News articles are currently being updated. Check back soon.</p>
        </div>
      </section>
    </main>
  );
}
