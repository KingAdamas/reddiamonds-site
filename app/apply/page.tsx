export default function ApplyPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">Apply to Red Diamonds International</h1>
        <p className="mt-4 text-gray-700">
          The official application form is coming next. For now, send your handle(s), region, and goals.
        </p>

        <div className="mt-6 rounded-2xl border border-gray-200 p-6">
          <p className="font-medium">Email (temporary):</p>
          <p className="mt-2 text-gray-700">info@reddiamondsinternational.com</p>
          <p className="mt-4 text-sm text-gray-600">
            Next step: we’ll replace this with a real form that saves submissions automatically.
          </p>
        </div>

        <a href="/" className="mt-8 inline-block text-sm underline">Back to Home</a>
      </div>
    </main>
  );
}
