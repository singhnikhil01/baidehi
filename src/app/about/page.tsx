import { Award, ShieldCheck, Factory, Mountain } from "lucide-react";
import FoundersNote from "@/components/about/FoundersNote";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Legend of Mithila",
  description:
    "From Janakpur to Kathmandu. Learn about Baidehi's 15-year journey, our founders vision, and our state-of-the-art noodle factory in Balaju.",
};

export default function About() {
  return (
    <div className="bg-[#022c22] min-h-screen relative overflow-hidden pb-32">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-emerald-950 via-[#022c22] to-black opacity-50" />

      {/* Hero Section */}
      <div className="relative pt-40 pb-20 text-center px-6">
        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
          Est. 2008 in Janakpur
        </span>
        <h1 className="text-5xl sm:text-7xl font-serif text-white mb-8">
          A Legacy of <br />{" "}
          <span className="text-emerald-400 italic">Himalayan Quality</span>
        </h1>
        <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Named 'Baidehi' after the daughter of Mithila (Sita), our journey
          began in the plains of Janakpur. Today, from our state-of-the-art
          facility in Balaju, Kathmandu, we feed the nation's hunger for
          authentic chowmein.
        </p>
      </div>

      <FoundersNote />

      {/* Values Grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 my-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-900/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-800 hover:border-amber-500/50 transition-colors">
            <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-white text-xl font-bold mb-4">
              Golden Terai Wheat
            </h3>
            <p className="text-emerald-100/60">
              We source only the finest wheat from the sun-drenched fields of
              the Terai region. High protein, naturally golden.
            </p>
          </div>
          <div className="bg-emerald-900/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-800 hover:border-amber-500/50 transition-colors">
            <Factory className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-white text-xl font-bold mb-4">
              Made in Kathmandu
            </h3>
            <p className="text-emerald-100/60">
              Our Balaju Industrial District facility uses Japanese technology
              adapted for Nepali water and climate.
            </p>
          </div>
          <div className="bg-emerald-900/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-800 hover:border-amber-500/50 transition-colors">
            <Mountain className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-white text-xl font-bold mb-4">
              The Purity Promise
            </h3>
            <p className="text-emerald-100/60">
              No harsh chemical processing. No plasticky aftertaste. Just pure,
              springy noodles that soak up buff sauce perfectly.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">
            Visual Proof
          </span>
          <h2 className="mt-2 text-3xl font-serif text-white">
            Inside Our{" "}
            <span className="text-emerald-400 italic">Balaju Facility</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-emerald-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621856236976-58c0c1737e8c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">Local Sourcing</p>
              <p className="text-emerald-200/60 text-xs uppercase tracking-wider">
                Terai Wheat Sacks
              </p>
            </div>
          </div>

          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-emerald-900 lg:col-span-2">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">Kathmandu Facility</p>
              <p className="text-emerald-200/60 text-xs uppercase tracking-wider">
                Automated Lines
              </p>
            </div>
          </div>

          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-emerald-900 lg:col-span-2">
            <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1664303844621-3c224b459468?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">Hygienic Drying</p>
              <p className="text-emerald-200/60 text-xs uppercase tracking-wider">
                Dust-free Enclosure
              </p>
            </div>
          </div>

          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-emerald-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606103608518-ea1877d94e39?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">Ready for Dispatch</p>
              <p className="text-emerald-200/60 text-xs uppercase tracking-wider">
                Delivery across Valley
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
