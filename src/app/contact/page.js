"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mkjgnder");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1a3c] to-[#132a5e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We welcome the opportunity to discuss your security needs and
            provide a tailored proposal.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a1a3c] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#0a1a3c] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1a3c] mb-1">Address</h3>
                  <p className="text-gray-600">5 Alfred Street, Freetown</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#0a1a3c] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L9.53 3.102a1.125 1.125 0 00-1.091-.852H7.5A2.25 2.25 0 005.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1a3c] mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+23275540411" className="hover:text-[#0a1a3c]">+232 75 540411</a>
                    {" / "}
                    <a href="tel:+23299287793" className="hover:text-[#0a1a3c]">+232 99 287793</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-[#0a1a3c] mb-3">
                Our Engagement Process
              </h3>
              <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                <li>Site assessment and risk consultation</li>
                <li>Proposal with recommended staffing and coverage plan</li>
                <li>Contract agreement and service-level terms</li>
                <li>Guard deployment with site-specific induction</li>
                <li>Ongoing supervision, reporting, and periodic review</li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#0a1a3c] mb-6">
              Request a Site Assessment
            </h2>

            {state.succeeded ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <p className="font-semibold">Thank you for reaching out.</p>
                <p className="text-sm mt-1">
                  We have received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
                  >
                    <option value="">Select a service</option>
                    <option value="Manned Guarding">Manned Guarding</option>
                    <option value="Mobile Patrol Services">Mobile Patrol Services</option>
                    <option value="Event and VIP Security">Event and VIP Security</option>
                    <option value="Specialized Protection">Specialized Protection</option>
                    <option value="Technology-Enabled Support">Technology-Enabled Support</option>
                    <option value="Not Sure / Need Advice">Not Sure / Need Advice</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#d4af37] text-[#0a1a3c] font-semibold px-8 py-4 rounded-md hover:bg-[#c19d2e] transition-colors disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}