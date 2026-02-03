"use client";

import { Clock, Users, Flame, Hammer, ShieldCheck } from "lucide-react";

export default function RecipeHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image - Industrial/Abstract */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>

      {/* Overlay - Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-950/95 via-emerald-950/80 to-transparent"></div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                The Secret
              </span>
              <div className="flex items-center gap-1 text-emerald-100/80 text-xs uppercase font-bold tracking-widest">
                <Flame className="w-4 h-4 text-orange-500" /> Precision
                Engineered
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              The Recipe for <br />
              <span className="text-emerald-400 italic">Perfection</span>
            </h1>

            <p className="text-emerald-100/80 text-lg mb-8 leading-relaxed">
              It's not just flour and water. It's a 7-stage industrial symphony
              that turns golden wheat into the springy noodles Nepal loves.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-10 text-white font-bold text-sm uppercase tracking-widest border-y border-white/10 py-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" /> 4 Hours Process
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" /> Touched by 0
                Hands
              </div>
              <div className="flex items-center gap-2">
                <Hammer className="w-5 h-5 text-amber-500" /> 7-Step Rolling
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-amber-500 text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors">
                Explore Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
