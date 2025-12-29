import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Santoro Plumbing & Well Services | Prospect, CT",
  description: "Reliable plumbing and well services in Prospect, CT"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container py-4 flex justify-between">
            <Link href="/" className="font-semibold">Santoro Plumbing & Well Services</Link>
            <a href="tel:+12037583066" className="bg-slate-900 text-white px-4 py-2 rounded-lg">
              Call (203) 758-3066
            </a>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t mt-16">
          <div className="container py-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Santoro Plumbing • (203) 758-3066
          </div>
        </footer>
      </body>
    </html>
  );
}
