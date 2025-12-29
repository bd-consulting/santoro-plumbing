import Link from "next/link";

const PHONE_TEXT = "(203) 758-3066";
const PHONE_TEL = "tel:+12037583066";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-brand-mist">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-semibold text-brand-navy">Santoro Plumbing &amp; Well Services, LLC</div>
          <p className="mt-2 text-sm text-slate-700">
            Prospect, CT 06712
            <br />
            <Link className="underline decoration-slate-300 hover:decoration-brand-navy" href={PHONE_TEL}>
              {PHONE_TEXT}
            </Link>
          </p>

          <div className="mt-6 text-xs text-slate-600">
            Licensed &amp; insured • Clean work • Clear communication
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold text-brand-navy">Explore</div>
          <div className="mt-3 grid gap-2 text-slate-700">
            <Link href="/services" className="hover:text-brand-navy">
              Services
            </Link>
            <Link href="/service-areas" className="hover:text-brand-navy">
              Service Areas
            </Link>
            <Link href="/reviews" className="hover:text-brand-navy">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-brand-navy">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold text-brand-navy">Hours</div>
          <div className="mt-3 text-slate-700">
            Mon–Fri: 8am–5pm
            <br />
            Emergency calls: Available
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/70">
        <div className="container py-5 text-xs text-slate-600 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>© {new Date().getFullYear()} Santoro Plumbing &amp; Well Services</div>
          <div>Built for speed and conversions.</div>
        </div>
      </div>
    </footer>
  );
}