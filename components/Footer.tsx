import Container from "@/components/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-motusBg border-t border-black/10">
      <Container className="py-24">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div>
            <h3 className="text-motusHeading text-xl tracking-[0.18em] uppercase">
              Motus
            </h3>
            <p className="mt-6 text-motusMuted max-w-xs">
              Refined interior design rooted in balance, proportion, and timeless materiality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-motusGold text-xs tracking-[0.24em] uppercase">
              Navigation
            </p>
            <div className="mt-6 flex flex-col gap-3 text-motusMuted text-sm">
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
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-motusGold text-xs tracking-[0.24em] uppercase">
              Contact
            </p>
            <div className="mt-6 text-motusMuted text-sm space-y-2">
              <p>info@motusdesignstudio.com</p>
              <p>Blue Ridge, Georgia</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-black/10 text-motusMuted text-xs tracking-wide">
          © {new Date().getFullYear()} Motus Design Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
