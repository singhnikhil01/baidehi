import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baidehi.com"),
  title: {
    template: "%s | Baidehi Premium Noodles",
    default: "Baidehi | Nepal's Premium Noodle Manufacturer",
  },
  description:
    "The soul of Nepali Chowmein. We manufacture premium raw noodles (Stick, Flat, Sewai) in Kathmandu using high-grade Terai wheat.",
  keywords: [
    "baidehi",
    "chowmein",
    "nepali noodles",
    "raw noodles manufacturer",
    "kathmandu noodle factory",
    "stick noodles",
    "flat noodles",
    "keema chowmein",
  ],
  authors: [{ name: "Baidehi Industries" }],
  creator: "Baidehi Industries",
  publisher: "Baidehi Industries",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Baidehi | Nepal's Premium Noodle Manufacturer",
    description:
      "Crafting the perfect raw noodle for Kathmandu's best kitchens. 15+ years of heritage, Japanese technology, and pure Terai wheat.",
    url: "https://www.baidehi.com",
    siteName: "Baidehi Noodles",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Baidehi Premium Noodles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baidehi | Nepal's Premium Noodle Manufacturer",
    description:
      "The soul of Nepali Chowmein. Premium raw noodles made in Kathmandu.",
    images: [
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Baidehi Manufacturers",
  url: "https://www.baidehi.com",
  logo: "https://www.baidehi.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9876543210",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/baidehi",
    "https://www.instagram.com/baidehi",
  ],
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
