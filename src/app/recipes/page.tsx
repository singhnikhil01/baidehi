import { Wheat, Droplets, Hammer, Flame, Wind, Check } from "lucide-react";
import RecipeHero from "@/components/recipes/RecipeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | The Industrial Recipe",
  description:
    "See how we make Nepal's favorite noodles. Automating perfection with vacuum mixing, steam locking, and dust-free drying technology.",
};

const steps = [
  {
    icon: Wheat,
    title: "1. Automated Intake & Sorting",
    desc: "Our automated silos ingest Sharbati Wheat, where optical sorters instantly reject impurities. Zero human touch ensures contamination-free raw material.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "2. PLC-Controlled Vacuum Mixing",
    desc: "Computer-controlled vacuum mixers infuse water into flour at high precision. This automated hydration creates a dough structure superior to manual kneading.",
    image:
      "https://images.unsplash.com/photo-1542866297-c290c0a85ca6?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Hammer,
    title: "3. Multi-Stage Automated Rolling",
    desc: "The dough travels through a 7-stage automated rolling line. Japanese sensors monitor thickness to the micron, ensuring perfect gluten development.",
    image:
      "https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Flame,
    title: "4. Continuous Steam Tunnel",
    desc: "Noodles pass through a customized steam tunnel on a conveyor. Automated temp-control gelatinizes the starch instantly, locking in the texture.",
    image:
      "https://images.unsplash.com/photo-1517242125876-0bab65dc7f48?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Wind,
    title: "5. Dust-Free Drying Chamber",
    desc: "No frying. Noodles enter an isolated, automated drying chamber where humidity-controlled air slowly extracts moisture over 4 hours.",
    image:
      "https://images.unsplash.com/photo-1596560548464-f010549b8416?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Recipes() {
  return (
    <div className="bg-[#022c22] py-20 min-h-screen pb-32">
      <RecipeHero />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">
            From Grain to Pack
          </span>
          <h2 className="text-4xl text-white font-serif">
            A Journey of{" "}
            <span className="text-emerald-400 italic">Transformation</span>
          </h2>
        </div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden border border-emerald-800 shadow-2xl">
                  <div
                    className="aspect-video bg-cover bg-center"
                    style={{ backgroundImage: `url('${step.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 to-transparent"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 mb-6 border border-amber-500/20">
                  <step.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-6">
                  {step.title}
                </h3>
                <p className="text-emerald-100/70 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-emerald-900/30 border border-emerald-800 text-center">
          <h3 className="text-2xl text-white font-serif mb-4">
            Ready to taste the difference?
          </h3>
          <p className="text-emerald-100/60 mb-8 max-w-2xl mx-auto">
            The result of this 5-step process is a noodle that absorbs 30% more
            sauce and never breaks in the wok.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors"
          >
            Order Samples
          </a>
        </div>
      </div>
    </div>
  );
}
