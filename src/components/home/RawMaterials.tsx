"use client";

import { Leaf, Droplets, ShieldCheck, Microscope } from "lucide-react";

export default function RawMaterials() {
  return (
    <section className="bg-[#022c22] py-24 border-t border-emerald-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">
              Scientific Sourcing
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-white mb-6">
              Engineered for <br />{" "}
              <span className="text-emerald-400 italic">
                Perfect Elasticity
              </span>
            </h2>
            <p className="text-emerald-100/70 text-lg mb-8 leading-relaxed">
              Great chowmein isn't just flour and water. It's about the{" "}
              <strong className="text-white">Protein-to-Starch ratio</strong>.
              We use specific hard red winter wheat from the Kapilvastu region
              that guarantees a Tensile Strength that allows for aggressive wok
              tossing without breakage.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-900 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">
                    High Gluten Content (12%+)
                  </h4>
                  <p className="text-xs text-emerald-100/60 mt-1">
                    Ensures the noodle has that signature 'bite' (Al Dente) and
                    doesn't turn into mush.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-900 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">RO Purified Water</h4>
                  <p className="text-xs text-emerald-100/60 mt-1">
                    Consistency begins with water. We use triple-filtered
                    Reverse Osmosis water to maintain pH balance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-900 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Microscope className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Lab Tested batches</h4>
                  <p className="text-xs text-emerald-100/60 mt-1">
                    Every flour shipment is tested for moisture content before
                    it even enters the mixer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden border border-emerald-800 shadow-2xl group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#022c22] via-transparent to-transparent opacity-80"></div>

            <div className="absolute bottom-8 left-8 right-8 bg-emerald-950/80 backdrop-blur-md p-6 rounded-xl border border-emerald-800">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-amber-500 font-bold uppercase mb-1">
                    Source Location
                  </p>
                  <p className="text-white font-serif text-xl">
                    Kapilvastu Plains
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">Grarde A</p>
                  <p className="text-[10px] text-emerald-100/50 uppercase">
                    Harvest Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
