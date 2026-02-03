"use client";

import Link from "next/link";
import { ArrowRight, ChefHat } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mt-24 min-h-screen lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#022c22] pb-16 lg:pt-0 lg:pb-0">
      {/* Background with Nepali aesthetic overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-[#022c22]/80 via-transparent to-[#022c22]"></div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Proudly Made in Nepal 🇳🇵
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-8">
          The Soul of <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-amber-500 italic">
            Nepali Chowmein
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-emerald-100/80 leading-relaxed mb-12">
          Crafted in Kathmandu using the finest wheat from the Terai plains. The
          preferred choice of street stalls from Thamel to Pokhara.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-black transition-all hover:bg-amber-400 hover:scale-105 shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]"
          >
            Become a Distributor
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-900/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-800 hover:border-emerald-600 backdrop-blur-sm"
          >
            Explore Our Range
          </Link>
        </div>

        {/* Premium Trust Bar */}
        <div className="mt-16 relative group">
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

          <div className="relative bg-emerald-950/40 backdrop-blur-md border border-white/10 rounded-full px-8 py-5 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:border-amber-500/30 transition-colors duration-500">
            <span className="text-emerald-100/50 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap md:border-r border-white/10 md:pr-6">
              Available at
            </span>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 filter contrast-125">
              {/* Bhatbhateni Logo Mimic */}
              <div className="relative group/logo cursor-default">
                <span className="text-2xl font-serif font-black text-transparent bg-clip-text bg-linear-to-r from-white via-white to-neutral-400 group-hover/logo:from-amber-200 group-hover/logo:via-amber-400 group-hover/logo:to-amber-200 transition-all duration-500 tracking-tight">
                  Bhatbhateni
                </span>
                <div className="h-0.5 w-0 group-hover/logo:w-full bg-amber-500 transition-all duration-500 absolute bottom-0 left-0"></div>
              </div>

              {/* Divider */}
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600/50"></div>

              {/* Big Mart Logo Mimic */}
              <div className="relative group/logo cursor-default">
                <span className="text-2xl font-sans font-black italic tracking-tighter text-white group-hover/logo:text-white transition-colors">
                  BIG
                  <span className="text-amber-500 group-hover/logo:text-amber-400">
                    MART
                  </span>
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 w-full h-full -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/logo:animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <div>
            <p className="text-3xl font-bold text-white">Premium</p>
            <p className="text-xs uppercase tracking-widest text-emerald-400/60 mt-2">
              Terai Grade
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">15+</p>
            <p className="text-xs uppercase tracking-widest text-emerald-400/60 mt-2">
              Years Experience
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">Janakpur</p>
            <p className="text-xs uppercase tracking-widest text-emerald-400/60 mt-2">
              Mithila Origin
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">Halal</p>
            <p className="text-xs uppercase tracking-widest text-emerald-400/60 mt-2">
              Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
