"use client";

import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
  specs: string[];
}

export default function ProductCard({
  name,
  description,
  category,
  specs,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-emerald-800/30 bg-[#064e3b] transition-all duration-300 hover:border-secondary/50 hover:shadow-2xl hover:shadow-emerald-900/50">
      <div className="p-8">
        <span className="inline-block px-2 py-1 mb-4 text-[10px] font-bold tracking-widest text-emerald-950 uppercase bg-emerald-400 rounded-sm">
          {category}
        </span>

        <h3 className="text-2xl font-serif text-white mb-3">{name}</h3>

        <p className="text-emerald-100/70 text-sm leading-relaxed mb-6 h-20">
          {description}
        </p>

        <div className="space-y-2 border-t border-emerald-800 pt-6">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between text-xs">
              <span className="text-emerald-400 font-medium">
                {spec.split(":")[0]}
              </span>
              <span className="text-emerald-100">{spec.split(":")[1]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-emerald-600 to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
