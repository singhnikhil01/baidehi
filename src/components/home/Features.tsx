import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-[#064e3b] py-20 border-y border-emerald-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-white italic mb-6">
              Why Top Chefs Choose{" "}
              <span className="text-secondary not-italic font-bold">
                Baidehi?
              </span>
            </h2>
            <div className="space-y-6">
              {[
                "Excellent absorption of spices and sauces.",
                "Does not break or turn mushy during tossing.",
                "Consistent thickness (1.5mm - 2mm options).",
                "Long shelf life without artificial preservatives.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <span className="text-secondary text-sm font-bold">✓</span>
                  </div>
                  <p className="text-emerald-100/80">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="text-white border-b border-secondary pb-1 hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                Learn about our heritage <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40 border border-emerald-500/20">
            {/* Abstract visual of chef tossing */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=800&auto=format&fit=crop')] opacity-40 bg-cover bg-center" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-6xl font-serif italic">
                Wok Hei
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
