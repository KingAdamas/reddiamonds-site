import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-4 text-gray-700">
          Contact options are coming next. For now, use email.
        </p>

        <div className="mt-6 rounded-2xl border border-gray-200 p-6">
          <p className="font-medium">Email:</p>
          <p className="mt-2 text-gray-700">info@reddiamondsinternational.com</p>
        </div>

        <Link href="/" className="mt-8 inline-block text-sm underline">Back to Home</Link>
      </div>
    </main>
  );
}
