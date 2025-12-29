"use client";

import Link from "next/link";
import { useState } from "react";
import { IconPhone } from "./Icons";

const PHONE_TEXT = "(203) 758-3066";
const PHONE_TEL = "tel:+12037583066";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-brand-navy text-white grid place-items-center font-semibold shadow-soft">
            S
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Santoro</div>
            <div className="text-xs text-slate-600 -mt-0.5">Plumbing &amp; Well Services</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-slate-700 hover:text-brand-navy">
              {n.label}
            </Link>
          ))}
          <Link href={PHONE_TEL} className="btn btn-primary gap-2">
            <IconPhone className="h-4 w-4" />
            Call {PHONE_TEXT}
          </Link>
        </nav>

        <button
          className="md:hidden btn btn-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              className="btn btn-primary gap-2"
            >
              <IconPhone className="h-4 w-4" />
              Call {PHONE_TEXT}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}