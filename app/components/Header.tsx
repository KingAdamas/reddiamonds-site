import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-rd-gray/80 bg-rd-black">
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
          <span className="font-semibold tracking-wide text-rd-gold">
            Red Diamonds International
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-sm">
          <Link href="/" className="px-3 py-2 text-gray-200 hover:text-rd-gold">
            Home
          </Link>
          <Link href="/contact" className="px-3 py-2 text-gray-200 hover:text-rd-gold">
            Contact
          </Link>
          <Link
            href="/apply"
            className="rounded-xl bg-rd-red px-4 py-2 font-semibold text-white hover:bg-rd-red-dark"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
