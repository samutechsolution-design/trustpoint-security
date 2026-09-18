import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.trustpointsecurityagency.sl"),
  title: "Trustpoint Security Agency | Trusted Protection in Freetown",
  description: "Trustpoint Security Agency (TSA) provides manned guarding, mobile patrol, event & VIP security, and specialized protection services in Freetown, Sierra Leone.",
  openGraph: {
    title: "Trustpoint Security Agency | Trusted Protection in Freetown",
    description: "Manned guarding, mobile patrol, event & VIP security, and specialized protection services in Freetown, Sierra Leone.",
    url: "https://www.trustpointsecurityagency.sl",
    siteName: "Trustpoint Security Agency",
    images: [
      {
        url: "/images/hero-guard.jpg",
        width: 1200,
        height: 630,
        alt: "Trustpoint Security Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}