"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle2 } from "lucide-react";

// Form validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid corporate email address." }),
  website: z.string().url({ message: "Please enter a valid URL (e.g., https://example.com)." }).optional().or(z.literal("")),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API request latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Submitted Inquiry Telemetry:", data);
    setIsSuccess(true);
    reset();
    
    // Auto-clear success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="relative w-full py-24 mt-16 bg-white overflow-hidden border-b border-slate-200/50 ">
      {/* Background Ambience Orbs */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] rounded-full bg-primary-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-bold tracking-wider uppercase mb-4">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-primary">
            Request an Enterprise AI Consultation
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
            Let our senior system architects evaluate your tech stack, coordinate digital roadmaps, and deploy custom solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct info cards & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Cards Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: "Our Location", detail: "Road-4, Block-B, Sector-1, Uttara, Dhaka-1230, BD" },
                { icon: Phone, title: "Phone / Support", detail: "+880 2 12345678\n+880 1711223344" },
                { icon: Mail, title: "Inquiries", detail: "info@siliconcomputing.com\nsales@siliconcomputing.com" },
                { icon: Clock, title: "Working Hours", detail: "Sunday - Thursday\n09:00 AM - 06:00 PM" }
              ].map((card, idx) => (
                <div key={idx} className="p-4.5 rounded-2xl glass border shadow-sm flex gap-3">
                  <div className="p-2 h-9 w-9 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center shrink-0">
                    <card.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-800 ">{card.title}</h4>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed whitespace-pre-line">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded styled Map */}
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-3xl overflow-hidden border shadow-md">
              <iframe
                title="Silicon Computing Ltd Dhaka Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3732007817454!2d90.39958061543085!3d23.876356784527702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757c43354b6fbcd%3A0x6b5d92e59df95e92!2sUttara%20Dhaka!5e0!3m2!1sen!2sbd!4v1652877960142!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale ] transition-all duration-300"
              />
            </div>

          </div>

          {/* Right Column: Validation Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative w-full p-6 sm:p-8 rounded-3xl bg-[#F0F4F7] shadow-xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5 text-sm"
                  >
                    {/* Grid Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-extrabold text-xs text-slate-700 ">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          {...register("name")}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 outline-none transition-all duration-300 ${
                            errors.name 
                              ? "border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.15)]" 
                              : "border-slate-200/80 focus:border-primary-500"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-extrabold text-xs text-slate-700 ">
                          Corporate Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          {...register("email")}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 outline-none transition-all duration-300 ${
                            errors.email 
                              ? "border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.15)]" 
                              : "border-slate-200/80 focus:border-primary-500"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Grid Website + Subject */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Website */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="website" className="font-extrabold text-xs text-slate-700 ">
                          Corporate Website <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="website"
                          type="text"
                          placeholder="https://company.com"
                          {...register("website")}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 outline-none transition-all duration-300 ${
                            errors.website 
                              ? "border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.15)]" 
                              : "border-slate-200/80 focus:border-primary-500"
                          }`}
                        />
                        {errors.website && (
                          <span className="text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                            <AlertCircle className="w-3 h-3" />
                            {errors.website.message}
                          </span>
                        )}
                      </div>

                      {/* Subject */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="font-extrabold text-xs text-slate-700 ">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="AI Integration, Cloud Migration..."
                          {...register("subject")}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50 outline-none transition-all duration-300 ${
                            errors.subject 
                              ? "border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.15)]" 
                              : "border-slate-200/80 focus:border-primary-500"
                          }`}
                        />
                        {errors.subject && (
                          <span className="text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                            <AlertCircle className="w-3 h-3" />
                            {errors.subject.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-extrabold text-xs text-slate-700 ">
                        Inquiry Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Please describe your system scope, required services, or transformation timeline..."
                        {...register("message")}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 outline-none transition-all duration-300 resize-none ${
                          errors.message 
                            ? "border-red-500/50 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.15)]" 
                            : "border-slate-200/80 focus:border-primary-500"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group py-3.5 rounded-xl bg-gradient-to-r from-[#000072] to-[#000072]/80 hover:from-[#000072]/90 hover:to-[#000072]/70 text-white font-extrabold tracking-wide shadow-lg disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                          Processing Telemetry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry Request
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="py-12 flex flex-col items-center justify-center text-center gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-lg border border-emerald-500/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl text-slate-800 ">
                        Inquiry Received Flawlessly
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 max-w-[280px] mx-auto leading-relaxed">
                        Your corporate telemetry has been cataloged. A senior systems architect will contact you within one business cycle.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
