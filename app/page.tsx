import Link from "next/link";

export default function Home() {
  return (
    <section className="border rounded-xl p-8">
      <h1 className="text-4xl font-semibold">Plumbing & Well Service You Can Trust</h1>
      <p className="mt-4 text-slate-700">
        Serving Prospect, CT and surrounding towns.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/contact" className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Request Service
        </Link>
        <a href="tel:+12037583066" className="border px-4 py-2 rounded-lg">
          Call (203) 758-3066
        </a>
      </div>
    </section>
  );
}
