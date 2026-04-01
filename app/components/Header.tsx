import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      {/* Existing menu items */}
      <div className="nav-item">
        <Link href="/contact">Let's Connect</Link>
      </div>
      <div className="nav-item">
        <Link href="/creator-hub">Creator Hub</Link>
      </div>
      {/* Other existing menu items */}
    </nav>
  );
}