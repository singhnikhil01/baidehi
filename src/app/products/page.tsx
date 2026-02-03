import {
  Download,
  Info,
  Check,
  Package,
  Scale,
  ChevronRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Stick, Flat & Sewai Noodles",
  description:
    "Browse our premium range of raw noodles. 100% Sharbati Wheat, no preservatives, and perfectly dried for the ultimate 'springy' texture.",
};

const products = [
  {
    id: 1,
    name: "Classic Stick Noodles",
    tagline: "The Street Food Standard",
    description:
      "Our flagship product. Engineered for high-heat wok tossing without breaking. The preferred choice for Keema Chowmein.",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
    specs: {
      Diameter: "1.8mm (±0.1mm)",
      Elasticity: "High Tensile",
      Moisture: "< 12%",
      "Cooking Time": "3-4 Minutes",
    },
    nutrition: {
      Energy: "360 Kcal",
      Protein: "12.5g",
      Carbs: "74g",
      Fat: "1.2g",
    },
    packaging: ["1kg Poly Pack", "20kg Wholesale Sack"],
  },
  {
    id: 2,
    name: "Flat Thukpa Noodles",
    tagline: "Himalayan Broth Grade",
    description:
      "6mm wide flat cut noodles designed to hold texture in hot soups. ideal for Thukpa and heavily sauced dishes.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
    specs: {
      Width: "6.0mm (Flat)",
      Texture: "Soft Bite",
      Moisture: "< 13%",
      "Cooking Time": "4-5 Minutes",
    },
    nutrition: {
      Energy: "355 Kcal",
      Protein: "11.8g",
      Carbs: "75g",
      Fat: "1.0g",
    },
    packaging: ["1kg Poly Pack", "10kg Bulk Box"],
  },
  {
    id: 3,
    name: "Roasted Vermicelli (Sewai)",
    tagline: "Festive Dessert Special",
    description:
      "Pre-roasted, ultra-fine vermicelli made from hard wheat semolina. Ready for Kheer or Payasam instantly.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    specs: {
      Thickness: "0.5mm (Fine)",
      Process: "Slow Roasted",
      Moisture: "< 5%",
      "Cooking Time": "2 Minutes",
    },
    nutrition: {
      Energy: "380 Kcal",
      Protein: "10.5g",
      Carbs: "78g",
      Fat: "0.5g",
    },
    packaging: ["200g Retail Pack", "500g Family Pack"],
  },
];

export default function Products() {
  return (
    <div className="bg-[#022c22] pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">
            Technical Catalog
          </span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-serif text-white mb-6">
            Industrial Grade{" "}
            <span className="text-emerald-400 italic">Specifications</span>
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Detailed breakdown of our product range for wholesalers who demand
            consistency.
          </p>
        </div>

        {/* Product List - High Density */}
        <div className="space-y-24">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-emerald-950/20 rounded-3xl p-2 border border-emerald-900/50"
            >
              {/* Image Section */}
              <div className="lg:col-span-4 h-96 lg:h-auto relative rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-bold text-2xl">{p.name}</h3>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-1">
                    {p.tagline}
                  </p>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-8 py-6 pr-6 pl-6 lg:pl-0">
                <p className="text-emerald-100/80 mb-8 leading-relaxed text-lg">
                  {p.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Technical Specs */}
                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-4 pb-2 border-b border-white/10">
                      <Scale className="w-5 h-5 text-amber-500" /> Technical
                      Specs
                    </h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(p.specs).map(([key, val]) => (
                          <tr
                            key={key}
                            className="border-b border-emerald-800/30"
                          >
                            <td className="py-2 text-emerald-100/60">{key}</td>
                            <td className="py-2 text-white font-mono text-right">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Nutrition Specs */}
                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-4 pb-2 border-b border-white/10">
                      <Info className="w-5 h-5 text-amber-500" /> Nutritional
                      Info{" "}
                      <span className="text-[10px] text-emerald-100/40 font-normal ml-auto">
                        (Per 100g)
                      </span>
                    </h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(p.nutrition).map(([key, val]) => (
                          <tr
                            key={key}
                            className="border-b border-emerald-800/30"
                          >
                            <td className="py-2 text-emerald-100/60">{key}</td>
                            <td className="py-2 text-white font-mono text-right">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Packaging & Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-emerald-900/30 p-4 rounded-xl border border-emerald-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center">
                      <Package className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-100/50 uppercase font-bold">
                        Available Packaging
                      </p>
                      <div className="flex gap-3 mt-1">
                        {p.packaging.map((pack) => (
                          <span
                            key={pack}
                            className="text-white text-xs font-mono bg-black/30 px-2 py-1 rounded"
                          >
                            {pack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors text-sm uppercase tracking-wide"
                  >
                    Inquire Price <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
