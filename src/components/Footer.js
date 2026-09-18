import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a3c] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              TRUSTPOINT SECURITY AGENCY
            </h3>
            <p className="text-sm text-gray-400">
              Trusted Protection. Professional Standards. Total Peace of Mind.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#d4af37] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-[#d4af37] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>5 Alfred Street, Freetown</li>
              <li>
                <a href="tel:+23275540411" className="hover:text-[#d4af37] transition-colors">
                  +232 75 540411
                </a>
              </li>
              <li>
                <a href="tel:+23299287793" className="hover:text-[#d4af37] transition-colors">
                  +232 99 287793
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">          Copyright {new Date().getFullYear()} Trustpoint Security Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}