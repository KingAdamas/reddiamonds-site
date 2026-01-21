import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reddiamondsinternational.com"),
  title: "Red Diamonds International",
  description:
    "Red Diamonds International is a creator-support and talent management brand helping content creators with strategy, structure, and agency coordination.",
  openGraph: {
    title: "Red Diamonds International",
    description:
      "Red Diamonds International is a creator-support and talent management brand helping content creators with strategy, structure, and agency coordination.",
    url: "https://www.reddiamondsinternational.com",
    siteName: "Red Diamonds International",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Red Diamonds International",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Diamonds International",
    description:
      "Red Diamonds International is a creator-support and talent management brand helping content creators with strategy, structure, and agency coordination.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#000000]">
      <body className="bg-[#000000] text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

