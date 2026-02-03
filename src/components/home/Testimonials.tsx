"use client";

import { Star, TrendingUp, HandCoins, Truck, Utensils } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#022c22] py-24 border-t border-emerald-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Business Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#064e3b]/30 border border-emerald-800 p-6 rounded-2xl hover:bg-[#064e3b]/50 transition-colors">
            <TrendingUp className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">
              High Profit Margins
            </h3>
            <p className="text-emerald-100/60 text-sm">
              Direct factory rate from Balaju. We remove the middleman so your
              Pasal makes more profit.
            </p>
          </div>
          <div className="bg-[#064e3b]/30 border border-emerald-800 p-6 rounded-2xl hover:bg-[#064e3b]/50 transition-colors">
            <HandCoins className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">
              Consistent Thickness
            </h3>
            <p className="text-emerald-100/60 text-sm">
              Whether it's Thukpa or Chowmein, our Japanese automated rollers
              ensure every strand is identical.
            </p>
          </div>
          <div className="bg-[#064e3b]/30 border border-emerald-800 p-6 rounded-2xl hover:bg-[#064e3b]/50 transition-colors">
            <Truck className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">
              Valley-wide Delivery
            </h3>
            <p className="text-emerald-100/60 text-sm">
              Free delivery for bulk orders &gt;50kg across Kathmandu, Lalitpur,
              and Bhaktapur within 24 hours.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">
            Our Partners
          </span>
          <h2 className="mt-2 text-3xl font-serif text-white">
            Trusted by{" "}
            <span className="text-emerald-400 italic">
              Nepal's Best Kitchens
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: "We serve 500 plates of Buff Chowmein daily. Baidehi's noodles don't get soggy even if kept for hours. Best quality in K-town.",
              author: "Hari Dai",
              role: "Owner, Newari Khaja Ghar, Basantapur",
            },
            {
              text: "For our hotel breakfast buffet, we needed quality assurance. Baidehi showed us their ISO certificate and hygiene process. Very professional.",
              author: "Chef Rakesh",
              role: "Exec Chef, Hotel Himalayan Glories",
            },
            {
              text: "My distribution route covers Banepa and Dhulikhel. Their packaging is strong, no breakage during transport. Good margins for me.",
              author: "Suman Shrestha",
              role: "Wholesale Distributor, Kavre",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-emerald-950 p-8 rounded-2xl border border-emerald-900 relative group hover:border-amber-500/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-emerald-100/80 text-sm italic mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-emerald-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
