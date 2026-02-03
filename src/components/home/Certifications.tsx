"use client";

import { CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section className="bg-emerald-950 border-y border-emerald-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-emerald-100/40 text-xs font-bold uppercase tracking-widest mb-8">
          Official Compliance
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {/* Certification 1: DFTQC */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full border-2 border-amber-500/50 flex items-center justify-center bg-[#022c22]">
              <CheckCircle2 className="w-8 h-8 text-amber-500" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">DFTQC Approved</h4>
              <p className="text-[10px] text-emerald-100/50">Govt. of Nepal</p>
            </div>
          </div>

          {/* Certification 2: ISO */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full border-2 border-amber-500/50 flex items-center justify-center bg-[#022c22]">
              <span className="text-amber-500 font-bold text-xl">ISO</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">ISO 9001:2015</h4>
              <p className="text-[10px] text-emerald-100/50">Quality Managed</p>
            </div>
          </div>

          {/* Certification 3: Halal */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full border-2 border-amber-500/50 flex items-center justify-center bg-[#022c22]">
              <span className="text-amber-500 font-serif font-bold text-lg">
                حلال
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Halal Certified</h4>
              <p className="text-[10px] text-emerald-100/50">100% Compliant</p>
            </div>
          </div>

          {/* Certification 4: Veg */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full border-2 border-green-500/50 flex items-center justify-center bg-[#022c22]">
              <div className="w-6 h-6 border-2 border-green-500 flex items-center justify-center p-1">
                <div className="w-full h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Veg</h4>
              <p className="text-[10px] text-emerald-100/50">Pure Vegetarian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
