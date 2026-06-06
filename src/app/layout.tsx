import type { Metadata } from "next";
import { Open_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silicon Computing Ltd — Accelerate AI-Driven Business Outcomes",
  description: "Transform your enterprise with state-of-the-art AI integration, secure multi-cloud architectures, zero-trust cybersecurity protocols, and premium software engineering tailored to maximize digital outcomes.",
  keywords: ["Corporate IT", "Artificial Intelligence", "Cloud Migration", "Cyber Security", "Silicon Computing", "Systems Development", "Dhaka IT Firm"],
  authors: [{ name: "Silicon Computing Ltd" }],
  openGraph: {
    title: "Silicon Computing Ltd — Accelerate AI-Driven Business Outcomes",
    description: "Premium enterprise IT solutions, AI neural network architectures, and zero-trust cybersecurity development.",
    url: "https://siliconcomputing.com",
    siteName: "Silicon Computing Ltd",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${openSans.variable} ${quicksand.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-slate-800 selection:bg-primary-500 selection:text-white transition-colors duration-300 font-sans" suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
