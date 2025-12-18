import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Red Diamonds International",
  description: "Creator agency platform for training, monetization strategy, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#000000]">
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
