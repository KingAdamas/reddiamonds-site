import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Red Diamonds International",
  description:
    "Red Diamonds International is a creator-support and talent management brand helping content creators with strategy, structure, and agency coordination.",
  metadataBase: new URL("https://www.reddiamondsinternational.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
