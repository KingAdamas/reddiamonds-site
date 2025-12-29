export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#241d20] bg-black">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-white/70 space-y-2">
        <p>© 2025 Red Diamonds International — A brand of Rare Sighting, LLC</p>
        <p>Atlanta, GA, USA</p>

        <p>
          This website is operated by Rare Sighting, LLC. Red Diamonds International is a
          creator-support and talent management brand providing strategic guidance, creator
          development support, and agency coordination services.
        </p>

        <p>Contact: reddiamondfamilyus@gmail.com</p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms of Service
          </a>
          <a href="/cookies" className="hover:text-white">
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
