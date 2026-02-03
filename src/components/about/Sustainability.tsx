"use client";

import { Leaf, Droplets, Users } from "lucide-react";

export default function Sustainability() {
  return (
    <section className="py-24 bg-emerald-900/30 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-5"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-end mb-16">
          <div className="max-w-xl">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">
              Our Responsibility
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Giving Back to{" "}
              <span className="text-emerald-400 italic">Janakpur</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-emerald-100/60 max-w-md text-sm leading-relaxed">
            We believe growth means nothing if our community doesn't grow with
            us. Here is how we ensure Baidehi remains a force for good.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Water */}
          <div className="group bg-emerald-950 border border-emerald-800 p-8 rounded-2xl hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Droplets className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Water Efficiency
            </h3>
            <p className="text-emerald-100/60 text-sm">
              Our closed-loop RO system recycles 40% of process water, reducing
              strain on Kathmandu's groundwater reserves.
            </p>
          </div>

          {/* 2. Plastic */}
          <div className="group bg-emerald-950 border border-emerald-800 p-8 rounded-2xl hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
              <Leaf className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Plastic Reduction
            </h3>
            <p className="text-emerald-100/60 text-sm">
              For 2025, we are transitioning to 20-micron recyclable packaging
              for all bulk packs, reducing plastic usage by 15%.
            </p>
          </div>

          {/* 3. Community */}
          <div className="group bg-emerald-950 border border-emerald-800 p-8 rounded-2xl hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <Users className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Local Employment
            </h3>
            <p className="text-emerald-100/60 text-sm">
              Over 80% of our workforce comes from Janakpur and Dhanusha,
              providing stable livelihoods to 200+ families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
