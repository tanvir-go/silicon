import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import TrustedCompanies from "@/sections/TrustedCompanies";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Statistics from "@/sections/Statistics";
import BusinessSolutions from "@/sections/BusinessSolutions";
import FeaturedInsight from "@/sections/FeaturedInsight";
import Services from "@/sections/Services";
import ManagementTeam from "@/sections/ManagementTeam";
import Testimonials from "@/sections/Testimonials";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* 1. Hero Cable Background Block */}
      <Hero />

      {/* 2. Corporate About Us and 2x2 Photo Collage */}
      <About />

      {/* 3. Companies We Work With Grid */}
      <TrustedCompanies />

      {/* 4. What Makes SCL Unique (Laptop Mockup) */}
      <WhyChooseUs />

      {/* 5. Standards Presentation & Watermarked Statistics */}
      <Statistics />

      {/* 6. IT Solutions Overlapping Dashboards */}
      <BusinessSolutions />

      {/* 7. Wavy Middle Navy Transformation Banner */}
      <FeaturedInsight />

      {/* 8. Three Value Pillars Guarantee */}
      <Services />

      {/* 9. Our Management Executive Board */}
      <ManagementTeam />

      {/* 10. Partner Testimonial Sliders */}
      <Testimonials />

      {/* 11. Zod Contact Portal & Map channels */}
      <ContactSection />
    </main>
  );
}
