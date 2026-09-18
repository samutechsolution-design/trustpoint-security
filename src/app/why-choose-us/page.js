import Link from "next/link";

export const metadata = {
  title: "Why Choose Us | Trustpoint Security Agency",
  description: "Discover why clients choose Trustpoint Security Agency: trained personnel, transparent reporting, flexible staffing, compliance, and a clear engagement process.",
};

const reasons = [
  "Trained, uniformed, and disciplined guard force",
  "Dedicated account management and single point of contact for each client",
  "Flexible staffing: short-term, long-term, and emergency deployment",
  "Transparent reporting with regular incident and activity summaries",
  "Scalable coverage from a single post to multi-site contracts",
  "Commitment to licensing, insurance, and regulatory compliance",
];

const engagementSteps = [
  {
    step: "Step 1",
    title: "Site Assessment and Risk Consultation",
    desc: "We evaluate your premises and risk profile to understand your specific security needs.",
  },
  {
    step: "Step 2",
    title: "Proposal with Recommended Staffing and Coverage Plan",
    desc: "We deliver a tailored proposal outlining the right staffing levels and coverage plan for your site.",
  },
  {
    step: "Step 3",
    title: "Contract Agreement and Service-Level Terms",
    desc: "We finalize a clear contract with defined service-level terms.",
  },
  {
    step: "Step 4",
    title: "Guard Deployment with Site-Specific Induction",
    desc: "Guards are deployed after completing induction specific to your site.",
  },
  {
    step: "Step 5",
    title: "Ongoing Supervision, Reporting, and Periodic Review",
    desc: "We maintain continuous oversight with regular reporting and periodic performance reviews.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#d4af37] flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1a3c] to-[#132a5e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Trustpoint Security Agency
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            A dependable partner in safety, built on discipline, transparency, and accountability.
          </p>
        </div>
      </section>

      {/* Why Choose TSA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <CheckIcon />
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Insurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a1a3c] text-white rounded-xl p-10">
            <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#0a1a3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.04 8.395-7.201 9.611a1.5 1.5 0 01-.598 0C9.04 20.395 6 16.556 6 12V6.75a.75.75 0 01.75-.75c1.87 0 3.65-.51 5.16-1.4a.75.75 0 01.78 0c1.51.89 3.29 1.4 5.16 1.4a.75.75 0 01.75.75V12z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Compliance and Insurance
            </h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Trustpoint Security Agency operates in accordance with
              applicable national and local security industry regulations,
              including guard licensing, firearms regulations (where
              applicable), and labor law requirements.
            </p>
            <p className="text-gray-200 leading-relaxed mb-4">
              The agency maintains liability insurance coverage and requires
              all personnel to hold valid security guard certification before
              deployment.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Clients receive copies of relevant licenses and insurance
              certificates upon request as part of the contracting process.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Our Engagement Process
            </h2>
            <p className="text-gray-600">
              A clear, structured path from first consultation to ongoing protection.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {engagementSteps.map((item) => (
                <div key={item.step} className="relative flex gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-[#0a1a3c] rounded-full flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-sm">
                      {item.step.replace("Step ", "")}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 flex-1">
                    <p className="text-[#d4af37] text-xs uppercase tracking-widest font-bold mb-1">
                      {item.step}
                    </p>
                    <h3 className="text-lg font-bold text-[#0a1a3c] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1a3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Start With a Site Assessment
          </h2>
          <p className="text-gray-300 mb-8">
            The first step is simple: tell us about your site, and we&apos;ll take it from there.
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