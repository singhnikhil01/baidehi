import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Ready to partner with us?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Contact our sales team for wholesale inquiries and custom orders.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-white hover:bg-foreground/80 transition-all duration-200"
          >
            Get a Quote
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
          >
            View Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
