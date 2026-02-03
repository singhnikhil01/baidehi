import Hero from "@/components/home/Hero";
import RawMaterials from "@/components/home/RawMaterials";
import Features from "@/components/home/Features";
import Manufacturing from "@/components/home/Manufacturing";
import Testimonials from "@/components/home/Testimonials";
import Certifications from "@/components/home/Certifications";
import FAQ from "@/components/home/FAQ";
import FactoryCTA from "@/components/home/FactoryCTA";
import CTA from "@/components/home/CTA";
import HomeContact from "@/components/home/HomeContact";
import ProductShowcase from "@/components/home/ProductShowcase";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baidehi | The Heart of Nepali Chowmein",
  description:
    "Discover Baidehi's premium raw noodles range. Stick, Flat, and Sewai noodles manufactured in Kathmandu for the perfect street-style taste.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <ProductShowcase />
      <RawMaterials />
      <Manufacturing />
      <FactoryCTA />
      <Features />
      <Testimonials />
      <FAQ />
      <HomeContact />
    </>
  );
}
