import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Trustpoint Security Agency",
  description: "Learn about Trustpoint Security Agency's vision, mission, core values, training standards, and organizational structure.",
};

const values = [
  {
    title: "Integrity",
    desc: "Honesty and accountability in every assignment",
  },
  {
    title: "Vigilance",
    desc: "Constant alertness and proactive threat awareness",
  },
  {
    title: "Discipline",
    desc: "Adherence to protocol, chain of command, and professional conduct",
  },
  {
    title: "Reliability",
    desc: "Guards present, on time, and fully briefed for every shift",
  },
  {
    title: "Respect",
    desc: "Courteous, professional interaction with clients, staff, and the public",
  },
];

const orgStructure = [
  {
    role: "Managing Director",
    desc: "Overall strategy, client relations, and compliance",
  },
  {
    role: "Operations Manager",
    desc: "Deployment planning, scheduling, and site coverage",
  },
  {
    role: "Field Supervisors",
    desc: "Daily site inspections and guard performance oversight",
  },
  {
    role: "Training Officer",
    desc: "Recruitment screening and ongoing instruction",
  },
  {
    role: "Security Guards",
    desc: "Front-line personnel assigned to client sites",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1a3c] to-[#132a5e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Trustpoint Security Agency
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            A partner in safety, not just a staffing vendor.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/images/about-team.png"
              alt="Trustpoint Security Agency team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trustpoint Security Agency (TSA) is a full-service security
              guard and risk-management company providing manned guarding,
              patrol, event, and specialized protection services to
              commercial, residential, industrial, and institutional clients.
              Built on a foundation of disciplined personnel, rigorous
              training, and accountable supervision, TSA delivers dependable
              protection solutions tailored to each client&apos;s risk
              profile and operating environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              TSA positions itself as a partner in safety rather than a
              simple staffing vendor, combining trained manpower with modern
              technology, structured supervision, and transparent reporting
              so that clients always know their premises, people, and assets
              are protected.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a1a3c] text-white rounded-xl p-10">
            <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#0a1a3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-200 leading-relaxed">
              To be the most trusted and professionally respected security
              services provider in every market we serve, recognized for
              integrity, discipline, and dependable protection.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-10">
            <div className="w-12 h-12 bg-[#0a1a3c] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#0a1a3c] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To safeguard our clients&apos; people, property, and reputation
              through highly trained personnel, sound procedures, and
              unwavering ethical conduct, delivering security services that
              clients can rely on around the clock.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0a1a3c] to-[#132a5e] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#d4af37] font-bold text-2xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-bold text-[#0a1a3c] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment & Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Recruitment, Training and Standards
            </h2>
            <p className="text-gray-600">
              Our guard force is built through a structured recruitment and
              training pipeline designed to produce disciplined, capable, and
              trustworthy security personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0a1a3c] mb-4">
                Recruitment
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>Background verification and reference checks on every candidate</li>
                <li>Physical fitness and aptitude screening</li>
                <li>Preference given to candidates with prior security, military, or law-enforcement experience</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0a1a3c] mb-4">
                Training Curriculum
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>Basic security procedures, patrol technique, and post orders</li>
                <li>Access control, visitor screening, and search procedures</li>
                <li>Fire safety, first aid, and emergency evacuation response</li>
                <li>Conflict de-escalation and customer-facing conduct</li>
                <li>Report writing and incident documentation</li>
                <li>Site-specific induction for each client assignment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0a1a3c] mb-4">
                Supervision and Quality Control
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>Field supervisors conducting scheduled and surprise site inspections</li>
                <li>Uniform, grooming, and punctuality standards enforced at every post</li>
                <li>Ongoing refresher training and performance evaluations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3c] mb-4">
              Organizational Structure
            </h2>
            <p className="text-gray-600">
              A clear chain of command ensures accountability at every level
              of service delivery.
            </p>
          </div>

          <div className="space-y-4">
            {orgStructure.map((item, index) => (
              <div
                key={item.role}
                className="flex items-center gap-6 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[#0a1a3c] rounded-full flex items-center justify-center">
                  <span className="text-[#d4af37] font-bold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1a3c]">{item.role}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1a3c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With a Team You Can Trust?
          </h2>
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