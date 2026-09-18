import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Trustpoint Security Agency",
  description: "Trustpoint Security Agency protects corporate offices, residential communities, retail, industrial sites, construction sites, events, and educational institutions.",
};

const industries = [
  {
    sector: "Corporate Offices",
    deployment: "Reception and access control, static guarding",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />
      </svg>
    ),
  },
  {
    sector: "Residential Communities",
    deployment: "Gatehouse security, perimeter patrol",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    sector: "Retail and Malls",
    deployment: "Loss prevention, customer-facing guarding",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.6A1 1 0 005.6 19H17M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
  },
  {
    sector: "Industrial and Warehousing",
    deployment: "Site security, mobile patrol, access logs",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V10l4-3v3l4-3v3l4-3v13H3zm18 0h-4V13h4v8z" />
      </svg>
    ),
  },
  {
    sector: "Construction Sites",
    deployment: "Asset protection, after-hours patrol",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V11l6-4 6 4v10M9 21v-6h4v6" />
      </svg>
    ),
  },
  {
    sector: "Events and Hospitality",
    deployment: "Crowd control, VIP protection",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a3 3 0 100 6 3 3 0 000-6zM5 20c0-3 3-5 7-5s7 2 7 5" />
      </svg>
    ),
  },
  {
    sector: "Educational Institutions",
    deployment: "Campus security, visitor screening",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5zM6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0a1a3c] to-[#132a5e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Security solutions tailored to the unique risk profile of every sector we protect.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item) => (
              <div
                key={item.sector}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-14 h-14 bg-[#0a1a3c] rounded-full flex items-center justify-center text-[#d4af37] mb-5">
                  {item.icon}
                </div>
                <h2 className="text-lg font-bold text-[#0a1a3c] mb-3">
                  {item.sector}
                </h2>
                <p className="text-[#d4af37] text-xs uppercase tracking-widest font-bold mb-2">
                  Typical Deployment
                </p>
                <p className="text-gray-600">{item.deployment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1a3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure What Coverage You Need?
          </h2>
          <p className="text-gray-300 mb-8">
            We'll assess your site and recommend the right deployment for your industry.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4af37] text-[#0a1a3c] font-semibold px-8 py-4 rounded-md hover:bg-[#c19d2e] transition-colors"
          >
            Get a Free Site Assessment
          </Link>
        </div>
      </section>
    </>
  );
}