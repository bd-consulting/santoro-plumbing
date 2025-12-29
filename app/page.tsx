import Image from "next/image";
import Link from "next/link";
import {
  IconClock,
  IconDroplet,
  IconPhone,
  IconShield,
  IconStar,
  IconWrench
} from "@/components/Icons";

const PHONE_TEXT = "(203) 758-3066";
const PHONE_TEL = "tel:+12037583066";

const trustPills = [
  { icon: IconStar, label: "5-star local reputation" },
  { icon: IconShield, label: "Licensed & insured" },
  { icon: IconClock, label: "Fast scheduling" }
];

const serviceCards = [
  {
    title: "Plumbing Repairs",
    desc: "Leaks, clogs, valves, fixture repair/replacement, water pressure issues.",
    icon: IconWrench
  },
  {
    title: "Water Heaters",
    desc: "Repair, replacement, and installs—tank and tankless troubleshooting.",
    icon: IconDroplet
  },
  {
    title: "Well Systems",
    desc: "Pumps, pressure tanks, low-pressure fixes, intermittent water issues.",
    icon: IconShield
  },
  {
    title: "Drain & Sewer",
    desc: "Clearing stubborn lines and diagnosing recurring backups the right way.",
    icon: IconWrench
  },
  {
    title: "Water Quality",
    desc: "Filtration guidance and solutions to improve taste, odor, and sediment.",
    icon: IconDroplet
  },
  {
    title: "Preventive Maintenance",
    desc: "Seasonal checks and proactive fixes that reduce emergencies.",
    icon: IconClock
  }
];

const processSteps = [
  {
    n: "01",
    title: "Tell us what’s going on",
    desc: "Call or request service online. Share symptoms and any photos if you can."
  },
  {
    n: "02",
    title: "Clear plan + options",
    desc: "We diagnose, explain what we found, and offer options that fit your budget."
  },
  {
    n: "03",
    title: "Fix it right (cleanly)",
    desc: "We protect your space, complete the work, and leave the site neat."
  }
];

const reviews = [
  {
    name: "Homeowner • Prospect",
    quote:
      "Showed up on time, explained everything clearly, and fixed the issue fast. Clean work."
  },
  {
    name: "Property Manager",
    quote:
      "Reliable scheduling and consistent workmanship. Easy to work with and responsive."
  },
  {
    name: "Customer • New Haven County",
    quote:
      "Pressure problems solved. They found the root cause instead of doing a quick patch."
  }
];

const faqs = [
  {
    q: "Do you offer emergency service?",
    a: "Call us. We’ll confirm availability and the quickest way to get you help."
  },
  {
    q: "Do you provide estimates?",
    a: "Yes. We’ll confirm the scope and expectations before any work begins."
  },
  {
    q: "What areas do you serve?",
    a: "Based in Prospect, CT. We serve surrounding towns based on schedule and job type."
  }
];

function SectionHeader(props: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="eyebrow">{props.eyebrow}</div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
        {props.title}
      </h2>
      {props.subtitle ? <p className="muted max-w-2xl">{props.subtitle}</p> : null}
    </div>
  );
}

function PrimaryButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact" className="btn btn-primary">
        Request Service
      </Link>
      <Link href={PHONE_TEL} className="btn btn-secondary flex gap-2">
        <IconPhone className="h-4 w-4 text-brand-navy" />
        Call {PHONE_TEXT}
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-brand-mist to-white">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {trustPills.map((t) => (
                  <div key={t.label} className="badge">
                    <t.icon className="h-4 w-4 text-brand-navy" />
                    {t.label}
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy">
                Premium plumbing &amp; well service—done clean, done right.
              </h1>

              <p className="text-base md:text-lg text-slate-700 max-w-xl">
                We show up, communicate clearly, and solve the root cause—so you’re not calling again
                next month.
              </p>

              <PrimaryButtons />

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="card p-4">
                  <div className="text-sm font-semibold text-brand-navy">Clear options</div>
                  <div className="text-sm text-slate-600">We explain the why, not just the fix.</div>
                </div>
                <div className="card p-4">
                  <div className="text-sm font-semibold text-brand-navy">Respectful work</div>
                  <div className="text-sm text-slate-600">Clean protection + tidy finish.</div>
                </div>
                <div className="card p-4">
                  <div className="text-sm font-semibold text-brand-navy">Local reliability</div>
                  <div className="text-sm text-slate-600">Prospect + surrounding towns.</div>
                </div>
              </div>
            </div>

            {/* Right: BIG hero image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              {/* CHANGE: make the image dominant and obvious */}
              <div className="relative h-[360px] md:h-[420px]">
                <Image
                  src="/hero-plumber.jpg"
                  alt="Plumbing service in action"
                  fill
                  priority
                  unoptimized // CHANGE: bypass Next image optimization to avoid optimizer/file-format issues
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                {/* CHANGE: premium overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-brand-navy/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-navy border border-slate-200">
                    <span className="h-2 w-2 rounded-full bg-brand-navy" />
                    Fast scheduling • Clean workmanship • Clear communication
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn bg-white text-brand-navy hover:bg-brand-mist">
                      Request Service
                    </Link>
                    <Link
                      href={PHONE_TEL}
                      className="btn border border-white/30 text-white hover:bg-white/10"
                    >
                      Call {PHONE_TEXT}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick highlights */}
              <div className="p-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-brand-navy">Root-cause fixes</div>
                  <div className="text-sm text-slate-600 mt-1">Stop repeat problems.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-brand-navy">Well expertise</div>
                  <div className="text-sm text-slate-600 mt-1">Pressure, pumps, tanks.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-brand-navy">Tidy finish</div>
                  <div className="text-sm text-slate-600 mt-1">Respect your home.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-14">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Services"
            title="Everything you need—without the fluff"
            subtitle="Clear categories, fast navigation, and service that feels premium end-to-end."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-brand-navy text-white grid place-items-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-brand-navy">{s.title}</div>
                    <div className="text-sm text-slate-600 mt-1">{s.desc}</div>
                  </div>
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href="/services" className="btn btn-secondary">
                    Learn more
                  </Link>
                  <Link href="/contact" className="btn btn-primary">
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-brand-mist p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="eyebrow">Fast help</div>
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy mt-2">
                  Have a leak, no hot water, or low pressure?
                </div>
                <p className="text-slate-700 mt-2">
                  Call now and we’ll triage quickly to get you scheduled.
                </p>
              </div>
              <div className="md:justify-self-end">
                <PrimaryButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y bg-white">
        <div className="container py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <SectionHeader
              eyebrow="How it works"
              title="A simple process that respects your time"
              subtitle="No mystery, no messy experience. Just clear communication and clean execution."
            />

            <div className="grid gap-4">
              {processSteps.map((p) => (
                <div key={p.n} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-brand-navy text-white grid place-items-center font-semibold">
                      {p.n}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy">{p.title}</div>
                      <div className="text-sm text-slate-600 mt-1">{p.desc}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white p-7 md:p-8 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  Quickest scheduling
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">
                  Call {PHONE_TEXT} now
                </div>
                <div className="mt-2 text-white/85">
                  We’ll confirm the issue and set the next best appointment window.
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={PHONE_TEL} className="btn bg-white text-brand-navy hover:bg-brand-mist">
                    Call now
                  </Link>
                  <Link
                    href="/contact"
                    className="btn border border-white/25 text-white hover:bg-white/10"
                  >
                    Request service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container py-14">
        <div className="flex flex-col gap-10">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Reviews"
              title="The kind of service people talk about"
              subtitle="Swap in real Google review snippets whenever you’re ready."
            />
            <Link href="/reviews" className="hidden md:inline-flex btn btn-secondary">
              View Reviews
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="card p-6">
                <div className="flex items-center gap-1 text-brand-navy">
                  <IconStar className="h-4 w-4" />
                  <IconStar className="h-4 w-4" />
                  <IconStar className="h-4 w-4" />
                  <IconStar className="h-4 w-4" />
                  <IconStar className="h-4 w-4" />
                </div>
                <p className="mt-4 text-sm text-slate-700">“{r.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-brand-navy">{r.name}</div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Link href="/reviews" className="btn btn-secondary w-full">
              View Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-mist">
        <div className="container py-14">
          <div className="card p-6 md:p-10">
            <SectionHeader eyebrow="FAQ" title="Quick answers" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="font-semibold text-brand-navy">{f.q}</div>
                  <div className="mt-2 text-sm text-slate-600">{f.a}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <PrimaryButtons />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CALL */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <Link
          href={PHONE_TEL}
          className="btn btn-primary w-full py-3 text-base shadow-soft flex gap-2"
        >
          <IconPhone className="h-5 w-5" />
          Call {PHONE_TEXT}
        </Link>
      </div>

      <div className="md:hidden h-20" />
    </>
  );
}
