import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { site } from "@/lib/site";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.terrahose.com"),
  title: {
    default: "Hydraulic Hose Assembly Malaysia | Terra Hose & Hydraulic Engineering",
    template: "%s | Terra Hose",
  },
  description: site.description,
  keywords: [
    "hydraulic hose malaysia",
    "hydraulic hose assembly",
    "hydraulic fittings",
    "hose crimping johor",
    "hydraulic hose replacement",
    "jis hydraulic fittings",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://www.terrahose.com",
    siteName: site.name,
    title: "Hydraulic Hose Assembly Malaysia | Terra Hose",
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terra Hose & Hydraulic Engineering — Hydraulic Hose Assembly Malaysia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Hose Assembly Malaysia | Terra Hose",
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-14 lg:pb-0">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
