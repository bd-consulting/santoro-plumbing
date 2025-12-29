export default function Contact() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3">
        Call <a className="underline" href="tel:+12037583066">(203) 758-3066</a> or submit the form.
      </p>
      <form className="mt-6 grid gap-3">
        <input className="border p-3 rounded-lg" placeholder="Name" />
        <input className="border p-3 rounded-lg" placeholder="Phone" />
        <textarea className="border p-3 rounded-lg" rows={5} placeholder="How can we help?" />
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}
