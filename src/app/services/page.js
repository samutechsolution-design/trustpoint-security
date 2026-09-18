import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Services | Trustpoint Security Agency",
  description: "Explore Trustpoint Security Agency's full range of services: manned guarding, mobile patrol, event and VIP security, specialized protection, and technology-enabled support.",
};

const services = [
  {
    title: "Manned Guarding",
    points: [
      "Static and fixed-post security guards for commercial and residential premises",
      "Access control and visitor management at entry points",
      "Corporate and office building security",
      "Industrial and warehouse site security",
    ],
  },
  {
    title: "Mobile Patrol Services",
    points: [
      "Scheduled and randomized vehicle patrols across multiple sites",
      "Perimeter checks and lock-up and unlock services",
      "Rapid-response coverage for alarm activations",
    ],
  },
  {
    title: "Event and VIP Security",
    points: [
      "Crowd management and access control for public and private events",
      "Close-protection details for VIPs and executives",
      "Venue security planning and coordination with local authorities",
    ],
  },
  {
    title: "Specialized Protection",
    points: [
      "Construction site security",
      "Retail and loss-prevention security",
      "Cash-in-transit escort support",
      "Emergency and short-notice deployment",
    ],
  },
  {
    title: "Technology-Enabled Support",
    points: [
      "CCTV monitoring coordination and incident reporting",
      "GPS-tracked patrol verification",
      "Digital incident logs and real-time client reporting",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Services() {
  return (
    <>
      <section className="relative text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/services-patrol.jpg"
            alt="Trustpoint Security Agency patrol vehicle"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1a3c]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Security Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Professional security solutions tailored to your needs, combined and scaled to fit your risk profile.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-[#0a1a3c] px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0a1a3c] font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {service.title}
                </h2>
              </div>

              <div className="p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a1a3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Tailored Security Plan?
          </h2>
          <p className="text-gray-300 mb-8">
            Combine and scale these services to match your site&apos;s specific risk profile.
          </p>
          <Link href="/contact" className="inline-block bg-[#d4af37] text-[#0a1a3c] font-semibold px-8 py-4 rounded-md hover:bg-[#c19d2e] transition-colors">
            Get a Free Site Assessment
          </Link>
        </div>
      </section>
    </>
  );
}