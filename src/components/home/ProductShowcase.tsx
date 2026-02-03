"use client";

import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function ProductShowcase() {
  return (
    <section className="relative py-24 bg-[#022c22]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">
            Our Masterpieces
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif text-white">
            Crafted for{" "}
            <span className="text-emerald-400 italic">Perfection</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-min md:auto-rows-fr h-auto md:h-[600px]">
          {/* Hero Item - Stick Noodles */}
          <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-emerald-950 border border-emerald-800/50">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  Best Seller
                </span>
                <div className="flex text-amber-500">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
              <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Premium Stick Noodles
              </h3>
              <p className="text-emerald-100/70 text-sm mb-6 max-w-md line-clamp-2">
                The classic choice for street-style Chowmein. Perfectly dried
                for that signature springy texture that chefs love.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors"
              >
                View Specs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Top Right - Flat Noodles */}
          <div className="group relative md:col-span-2 rounded-3xl overflow-hidden bg-emerald-950 border border-emerald-800/50">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547496502-ffa2264a36b5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 right-0 p-8 text-right">
              <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-emerald-400 transition-colors">
                Flat Noodles
              </h3>
              <p className="text-emerald-100/70 text-xs uppercase tracking-wider mb-4">
                Wide & Absorbent
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Bottom Left - Sewai */}
          <div className="group relative rounded-3xl overflow-hidden bg-emerald-950 border border-emerald-800/50">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-xl font-serif text-white mb-2">
                Sewai / Vermicelli
              </h3>
              <p className="text-emerald-100/60 text-xs">
                For desserts & soups
              </p>
            </div>
          </div>

          {/* Bottom Right - Action */}
          <div className="relative rounded-3xl overflow-hidden bg-emerald-900 border border-emerald-700 flex flex-col items-center justify-center text-center p-6 hover:bg-emerald-800 transition-colors cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              View Full Catalog
            </h3>
            <p className="text-emerald-100/50 text-xs">
              Explore all 5+ Varieties
            </p>
            <Link href="/products" className="absolute inset-0"></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
