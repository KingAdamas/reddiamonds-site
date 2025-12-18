import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Red Diamonds International",
  description:
    "Creator agency platform for training, monetization strategy, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#000000]">
      <body className={`${montserrat.className} bg-[#000000] text-white antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
