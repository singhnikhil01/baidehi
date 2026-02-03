"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function FactoryCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image of Factory/Industrial Area */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598460599602-95f00e979927?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
          Open for Visits
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Visit our{" "}
          <span className="text-emerald-400 italic">Janakpur Facility</span>
        </h2>
        <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          See where tradition meets technology. We invite distributors to visit
          our production house in the heart of Mithila.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-black px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] uppercase tracking-wider text-sm"
          >
            Schedule a Tour
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://maps.google.com/?q=Janakpurdham"
            target="_blank"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5 text-emerald-400" />
            Get Directions
          </a>
        </div>

        <p className="mt-8 text-xs text-emerald-100/40 uppercase tracking-widest">
          Mithila Municipality • Janakpurdham • Nepal
        </p>
      </div>
    </section>
  );
}
