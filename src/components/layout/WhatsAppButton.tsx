"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "9779876543210";
  const message = encodeURIComponent(
    "Namaste! I am interested in Baidehi Noodles distributorship.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Chat with Sales
      </span>
    </a>
  );
}
