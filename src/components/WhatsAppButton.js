export default function WhatsAppButton() {
  const phoneNumber = "23275540411";
  const message =
    "Hello Trustpoint Security Agency, I would like to enquire about your security services. Could you please provide more information?";
  const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.13c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.92-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}