"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you deliver outside Kathmandu Valley?",
      answer:
        "Yes. For bulk orders over 100kg, we arrange transport to major cities like Pokhara, Chitwan, Dharan, and Butwal via our logistics partners. Shipping charges apply at actuals.",
    },
    {
      question: "What is the shelf life of Raw Noodles?",
      answer:
        "Our raw brick noodles have a shelf life of 4-5 days if refrigerated, and 48 hours at room temperature. We do not use strong preservatives, so freshness is priority.",
    },
    {
      question: "What is the minimum order for wholesale rates?",
      answer:
        "To qualify for our Distributor Price List, the minimum order quantity (MOQ) is 25kg. For lower quantities, retail rates apply.",
    },
    {
      question: "Do you offer credit terms?",
      answer:
        "For new partners, we operate on 'Cash on Delivery' or Bank Transfer. 7-day credit cycles can be discussed after 3 months of regular business.",
    },
  ];

  return (
    <section className="bg-[#022c22] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-white">
            Frequently Asked{" "}
            <span className="text-emerald-400 italic">Questions</span>
          </h2>
          <p className="text-emerald-100/60 mt-4">
            Everything you need to know before partnering with Baidehi.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-emerald-800 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-[#064e3b]" : "bg-[#064e3b]/30"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-bold text-lg ${openIndex === index ? "text-amber-500" : "text-white"}`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-amber-500" />
                ) : (
                  <Plus className="w-5 h-5 text-emerald-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 text-emerald-100/70 border-t border-emerald-800/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
