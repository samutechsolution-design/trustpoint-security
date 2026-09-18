import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-guard.jpg"
            alt="Professional security guard on duty"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3c]/95 via-[#0a1a3c]/80 to-[#0a1a3c]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-[#d4af37] font-semibold tracking-widest uppercase mb-4">
              Trusted Protection. Professional Standards.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Total Peace of Mind for Your People and Property
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Trustpoint Security Agency (TSA) delivers trained, disciplined, and accountable security personnel, combining manned guarding, mobile patrols, and modern technology to protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#d4af37] text-[#0a1a3c] font-semibold px-8 py-4 rounded-md text-center hover:bg-[#c19d2e] transition-colors">
                Get a Free Site Assessment
              </Link>
              <a href="tel:+23275540411" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md text-center hover:bg-white hover:text-[#0a1a3c] transition-colors">
                Call Us: +232 75 540411
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Our Security Services
            </h2>
            <p className="text-gray-600">
              Professional security solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Manned Guarding", desc: "Static and fixed-post security, access control, corporate and industrial site protection." },
              { title: "Mobile Patrol Services", desc: "Scheduled and randomized patrols, perimeter checks, and rapid-response coverage." },
              { title: "Event and VIP Security", desc: "Crowd management, access control, and executive protection for events of any scale." },
              { title: "Specialized Protection", desc: "Construction site security, retail loss prevention, and cash-in-transit escort support." },
              { title: "Technology-Enabled Support", desc: "CCTV monitoring coordination, GPS-tracked patrol verification, and digital incident reporting." },
            ].map((service) => (
              <div key={service.title} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#0a1a3c] rounded-full flex items-center justify-center mb-5">
                  <div className="w-4 h-4 bg-[#d4af37] rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a1a3c] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="text-[#0a1a3c] font-semibold hover:text-[#d4af37] transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Why Choose TSA?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Trained, uniformed and disciplined guard force",
              "Dedicated client account management",
              "Flexible short- and long-term deployment",
              "Transparent incident and activity reporting",
              "Single-site to multi-site security coverage",
              "Commitment to compliance and insurance",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-[#d4af37] font-bold text-xl leading-none mt-1">
                  Y
                </span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Who We Protect
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Corporate Offices",
              "Residential Communities",
              "Retail and Malls",
              "Industrial Facilities",
            ].map((industry) => (
              <div key={industry} className="bg-[#0a1a3c] text-white rounded-lg p-8 text-center hover:bg-[#132a5e] transition-colors">
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/industries" className="text-[#0a1a3c] font-semibold hover:text-[#d4af37] transition-colors">
              See All Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1a3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure What Matters Most
          </h2>
          <p className="text-gray-300 mb-8">
            Contact Trustpoint Security Agency today for a site assessment, risk consultation, and tailored security proposal.
          </p>
          <Link href="/contact" className="inline-block bg-[#d4af37] text-[#0a1a3c] font-semibold px-8 py-4 rounded-md hover:bg-[#c19d2e] transition-colors">
            Get a Free Site Assessment
          </Link>
        </div>
      </section>
    </>
  );
}