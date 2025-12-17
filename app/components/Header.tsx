import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* LOGO OPTION:
              1) Put your logo file in: /public/logo.png
              2) Then uncomment the Image below and delete the "RD" circle
          */}

          {/* <Image src="/logo.png" alt="Red Diamonds International" width={36} height={36} /> */}

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            RD
          </div>

          <span className="font-semibold">Red Diamonds International</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/apply" className="hover:underline">Apply</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
