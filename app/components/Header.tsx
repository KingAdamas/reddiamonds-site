import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-[#241d20] bg-[#1f0e0f]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Red Diamonds International"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="font-semibold tracking-wide text-[#edc970]">
            Red Diamonds International
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-sm">
          <Link href="/" className="px-3 py-2 text-gray-200 hover:text-[#edc970]">
            Home
          </Link>
          <Link href="/contact" className="px-3 py-2 text-gray-200 hover:text-[#edc970]">
            Contact
          </Link>
          <Link
            href="/apply"
            className="rounded-xl bg-[#d13027] px-4 py-2 font-semibold text-white hover:bg-[#97261f]"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
