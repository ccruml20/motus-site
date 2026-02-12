"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Dark Nav Background */}
      <div className="absolute inset-0 bg-motusDark/90 backdrop-blur-md" />

      <div className="relative">
        {/* FULL WIDTH NAV CONTENT */}
        <div className="w-full px-8 lg:px-16">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={close}
              className="text-[#F3EFE8] text-2xl tracking-[0.18em] uppercase"
            >
              Motus
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.18em] uppercase text-white/80">
              <Link href="/portfolio" className="hover:text-motusGold transition">
                Portfolio
              </Link>
              <Link href="/services" className="hover:text-motusGold transition">
                Services
              </Link>
              <Link href="/about" className="hover:text-motusGold transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-motusGold transition">
                Contact
              </Link>

              <Link
                href="/contact"
                className="ml-4 inline-flex items-center bg-motusGold text-black px-6 py-3 text-[11px] tracking-[0.18em] uppercase transition hover:opacity-90"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white/80"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={[
                    "block h-px w-6 bg-current transition",
                    open ? "translate-y-[5px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-px w-6 bg-current transition",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-px w-6 bg-current transition",
                    open ? "-translate-y-[5px] -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/15" />
        </div>
      </div>

      {/* Mobile Panel */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={close}
          />

          <div className="fixed inset-x-0 top-0 pt-28 pb-10 bg-motusDark/98 border-b border-white/15 z-50 px-8">
            <div className="flex flex-col gap-6 text-white/80 text-lg uppercase tracking-[0.18em]">
              <Link
                href="/portfolio"
                onClick={close}
                className="hover:text-motusGold transition"
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                onClick={close}
                className="hover:text-motusGold transition"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={close}
                className="hover:text-motusGold transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={close}
                className="hover:text-motusGold transition"
              >
                Contact
              </Link>

              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={close}
                  className="inline-block bg-motusGold text-black px-10 py-4 text-xs tracking-[0.18em] uppercase transition hover:opacity-90"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

