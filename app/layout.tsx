import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { site } from "@/lib/site";

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
  metadataBase: new URL("https://terrahose.com"),
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
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://terrahose.com",
    siteName: site.name,
    title: "Hydraulic Hose Assembly Malaysia | Terra Hose",
    description: site.description,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
