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
    <html lang="en">
      <body className="bg-[#1f0e0f] text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
