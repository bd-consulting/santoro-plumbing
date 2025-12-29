import Link from "next/link";
import { IconClock, IconDroplet, IconShield, IconStar, IconWrench, IconPhone } from "@/components/Icons";

const PHONE_TEXT = "(203) 758-3066";
const PHONE_TEL = "tel:+12037583066";

const trust = [
  { title: "Fast scheduling", desc: "Quick response and clear next steps.", icon: IconClock },
  { title: "Quality workmanship", desc: "Clean installs and reliable repairs.", icon: IconWrench },
  { title: "Straightforward pricing", desc: "No surprises—just clarity.", icon: IconShield }
];

const services = [
  { title: "Plumbing Repairs", desc: "Leaks, clogs, valves, pipe repair and replacement.", icon: IconWrench },
  { title: "Water Heaters", desc: "Installs, replacements, and troubleshooting.", icon: IconDroplet },
  { title: "Well Systems", desc: "Pumps, pressure tanks, and low-pressure fixes.", icon: IconShield }
];

const testimonials = [
  {
    name: "Homeowner (Prospect)",
    quote:
      "On time, explained everything clearly, and fixed the issue fast. Clean work and great communication."
  },
  {
    name: "Property Manager",
    quote:
      "Reliable service and easy scheduling. We use them for recurring calls because the work is consistent."
  },
  {
    name: "Local Customer",
    quote:
      "Pressure problems solved—system runs better than it has in years. Highly recommend."
  }
];

const faqs = [
  {
    q: "Do you offer emergency service?",
    a: "Yes—call us and we’ll confirm availability and the quickest path to get you help."
  },
  {
    q: "Do you provide estimates?",
    a: "Yes. We’ll confirm the scope and provide clear expectations before work begins."
  },
  {
    q: "What areas do you serve?",
    a: "Based in Prospect, CT. We serve surrounding towns—see the Service Areas page for examples."
  }
];

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-200 via-white to-slate-200 blur-3xl opacity-70" />
      <div className="absolute -bottom-28 right-[-10rem] h-80 w-80 rounded-full bg-slate-100 blur-3xl opacity-80" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b bg-gradient-to-b from-slate-50 to-white">
        <Glow />
        <div className="container relative py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="eyebrow">Prospect, CT • Plumbing &amp; Well Service</div>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                A modern, reliable plumbing team you can actually reach.
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-700">
                Clean workmanship, clear communication, and fast scheduling—without the runaround.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request Service
                </Link>
                <Link href={PHONE_TEL} className="btn btn-secondary flex gap-2">
                  <IconPhone className="h-4 w-4" />
                  Call {PHONE_TEXT}
                </Link>
              </div>

              <div className="mt-7 flex items-center gap-2 text-sm text-slate-600">
                <IconStar className="h-4 w-4" />
                <span>
                  Trusted locally for quality repairs &amp; honest recommendations.
                </span>
              </div>
            </div>

            {/* Right panel */}
            <div className="card p-6 md:p-8">
              <div className="eyebrow">What we do best</div>
              <div className="mt-3 grid gap-3">
                {services.map((s) => (
                  <div key={s.title} className="flex gap-3 rounded-2xl border border-slate-200 p-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm text-slate-600">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <span className="font-semibold">Pro tip:</span> If you can, text or note the brand/model
                of your well pump or water heater—helps us diagnose faster.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="container py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="card p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center">
                  <t.icon className="h-5 w-5 text-slate-900" />
                </div>
                <div className="font-semibold">{t.title}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
      <section className="container pb-12">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 text-white p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Need service this week?
              </div>
              <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                Call now for the quickest scheduling.
              </div>
              <div className="mt-2 text-white/80">
                We’ll confirm the issue, explain the plan, and get you on the calendar.
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href={PHONE_TEL} className="btn bg-white text-slate-900 hover:bg-slate-100">
                Call {PHONE_TEXT}
              </Link>
              <Link href="/contact" className="btn btn-secondary border-white/20 text-white hover:bg-white/10">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Reviews</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">People call us back for a reason.</h2>
          </div>
          <Link href="/reviews" className="hidden md:inline-flex btn btn-secondary">
            View Reviews
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((r) => (
            <div key={r.name} className="card p-6">
              <div className="flex items-center gap-2 text-slate-700">
                <IconStar className="h-4 w-4" />
                <IconStar className="h-4 w-4" />
                <IconStar className="h-4 w-4" />
                <IconStar className="h-4 w-4" />
                <IconStar className="h-4 w-4" />
              </div>
              <p className="mt-4 text-sm text-slate-700">“{r.quote}”</p>
              <div className="mt-4 text-sm font-semibold">{r.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/reviews" className="btn btn-secondary w-full">
            View Reviews
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <div className="card p-6 md:p-10">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Quick answers</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-slate-200 p-5">
                <div className="font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-slate-600">{f.a}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Request Service
            </Link>
            <Link href={PHONE_TEL} className="btn btn-secondary">
              Call {PHONE_TEXT}
            </Link>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CALL */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <Link
          href={PHONE_TEL}
          className="btn btn-primary w-full py-3 text-base shadow-lg flex gap-2"
        >
          <IconPhone className="h-5 w-5" />
          Call {PHONE_TEXT}
        </Link>
      </div>

      {/* spacing to avoid overlap with sticky call */}
      <div className="md:hidden h-20" />
    </>
  );
}