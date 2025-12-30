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
  { icon: IconStar, label: "Local 5-star reputation" },
  { icon: IconShield, label: "Licensed & insured" },
  { icon: IconClock, label: "Fast scheduling" }
];

const services = [
  {
    title: "Drain & Sewer",
    desc: "Clogs, backups, recurring issues—diagnosed and cleared properly.",
    icon: IconWrench
  },
  {
    title: "Water Heaters",
    desc: "No hot water? Fast troubleshooting, repair, and replacement options.",
    icon: IconDroplet
  },
  {
    title: "Well Systems",
    desc: "Pumps, pressure tanks, low-pressure fixes, intermittent water.",
    icon: IconShield
  },
  {
    title: "Plumbing Repairs",
    desc: "Leaks, valves, fixtures, pressure issues—clean workmanship.",
    icon: IconWrench
  }
];

const highlightCards = [
  { title: "Honest options", desc: "Clear explanation + choices that fit your budget." },
  { title: "Clean work", desc: "We protect your space and leave it tidy." },
  { title: "Root-cause fixes", desc: "We solve the problem—not just the symptom." }
];

const processSteps = [
  { n: "01", title: "Request service", desc: "Call or send a quick request with details." },
  { n: "02", title: "Diagnosis + options", desc: "We explain what we found and the best path forward." },
  { n: "03", title: "Fix it right", desc: "Clean, professional work with a tidy finish." }
];

function PrimaryButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact" className="btn btn-primary">
        Get a Free Quote
      </Link>
      <Link href={PHONE_TEL} className="btn btn-secondary flex gap-2">
        <IconPhone className="h-4 w-4 text-[color:var(--brand-navy)]" />
        Call {PHONE_TEXT}
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="brand-hero border-b angle-divider">
        <div className="container py-12 md:py-16 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left copy */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {trustPills.map((t) => (
                  <div key={t.label} className="badge">
                    <t.icon className="h-4 w-4" />
                    {t.label}
                  </div>
                ))}
              </div>

              <h1 className="display">
                Plumbing &amp; well service that feels premium from the first call.
              </h1>

              <p className="text-base md:text-lg text-slate-700 max-w-xl">
                Reliable scheduling, clear communication, and clean workmanship—done right the first time.
              </p>

              <PrimaryButtons />

              <div className="grid gap-3 sm:grid-cols-3">
                {highlightCards.map((c) => (
                  <div key={c.title} className="card p-4">
                    <div className="text-sm font-semibold text-[color:var(--brand-navy)]">{c.title}</div>
                    <div className="text-sm text-slate-600">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: BIG hero image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <div className="relative h-[360px] md:h-[440px]">
                <Image
                  src="/hero-plumber.jpg"
                  alt="Plumbing service in action"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                {/* CHANGE: warmer overlay (copper + navy blend) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy)]/65 via-[color:var(--brand-navy)]/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--brand-navy)] border border-slate-200">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-copper)]" />
                    Fast scheduling • Clean workmanship • Clear options
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn btn-primary">
                      Request Service
                    </Link>
                    <Link href={PHONE_TEL} className="btn btn-ghost-light">
                      Call {PHONE_TEXT}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Micro trust row */}
              <div className="p-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-[color:var(--brand-navy)]">Local reliability</div>
                  <div className="text-sm text-slate-600 mt-1">Prospect + nearby towns.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-[color:var(--brand-navy)]">Well expertise</div>
                  <div className="text-sm text-slate-600 mt-1">Pressure, pumps, tanks.</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-[color:var(--brand-navy)]">Tidy finish</div>
                  <div className="text-sm text-slate-600 mt-1">Respect your home.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service tiles row (Crimson-like “Quality Services” block) */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="service-tile">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-[color:var(--brand-navy)] text-white grid place-items-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[color:var(--brand-navy)]">{s.title}</div>
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
        </div>
      </section>

      {/* DARK CTA SLAB */}
      <section className="brand-slab border-b">
        <div className="container py-14 relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="eyebrow text-white/75">Call now</div>
              <h2 className="display-invert mt-2">
                Your trusted local plumber—one call away.
              </h2>
              <p className="mt-3 text-white/80 max-w-xl">
                Leaks, clogs, no hot water, low pressure—tell us what’s going on and we’ll get you the
                next best window.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={PHONE_TEL} className="btn bg-white text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-mist)]">
                  Call {PHONE_TEXT}
                </Link>
                <Link href="/contact" className="btn btn-ghost-light">
                  Request service
                </Link>
              </div>
            </div>

            {/* “Process” cards with more weight */}
            <div className="grid gap-4">
              {processSteps.map((p) => (
                <div key={p.n} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-[color:var(--brand-copper)] text-white grid place-items-center font-semibold">
                      {p.n}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{p.title}</div>
                      <div className="text-sm text-white/75 mt-1">{p.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="container py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <div className="eyebrow">Why Santoro</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--brand-navy)]">
              Less stress. Better results.
            </h2>
            <p className="text-slate-700">
              We focus on clear diagnosis, clean execution, and long-term reliability—so you’re not dealing
              with repeat issues.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-secondary">
                View services
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Get a quote
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold text-[color:var(--brand-navy)]">Popular requests</div>
            <div className="mt-4 grid gap-3">
              {[
                "No hot water / water heater issues",
                "Low well pressure / intermittent water",
                "Recurring drain clogs & backups",
                "Leak detection & fixture repairs"
              ].map((x) => (
                <div key={x} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold text-[color:var(--brand-navy)]">{x}</div>
                  <div className="text-sm text-slate-600 mt-1">
                    Call and we’ll triage quickly to get you scheduled.
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[color:var(--brand-mist)] p-4 text-sm text-slate-700">
              Prefer phone?{" "}
              <Link href={PHONE_TEL} className="font-semibold underline decoration-slate-300 hover:decoration-[color:var(--brand-copper)]">
                Call {PHONE_TEXT}
              </Link>
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
