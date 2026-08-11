"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d100d]/95 text-white backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="CF Lawn Services home">
          <Image src="/images/logo.jpg" alt="CF Lawn Services logo" width={60} height={60} className="h-14 w-14 rounded-lg bg-white object-contain" priority />
          <span className="display hidden text-lg leading-none sm:block">CF LAWN<br /><span className="text-[#65c82e]">SERVICES</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map(({ label, href }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`text-sm font-bold transition hover:text-[#65c82e] ${pathname === href ? "text-[#65c82e]" : "text-white/80"}`}>{label}</Link>)}
          <Link href="/contact#quote" className="btn btn-green text-sm">Get a Free Quote</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 md:hidden" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation">
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="container flex flex-col gap-1 border-t border-white/10 py-4 md:hidden" aria-label="Mobile navigation">{links.map(({ label, href }) => <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-lg px-3 py-3 font-bold hover:bg-white/10">{label}</Link>)}<Link href="/contact#quote" onClick={() => setOpen(false)} className="btn btn-green mt-2">Get a Free Quote</Link></nav>}
    </header>
  );
}
