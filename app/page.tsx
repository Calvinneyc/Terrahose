import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icon";
import { services } from "@/data/services";
import { productCategories } from "@/data/products";
import { industries, whyTerra } from "@/data/industries";
import { site, waLink, waDefault } from "@/lib/site";

const serviceIcons: Record<string, IconName> = {
  wrench: "wrench",
  crimp: "crimp",
  replace: "replace",
  repair: "repair",
  custom: "custom",
  truck: "truck",
};

const industryIcons: Record<string, IconName> = {
  construction: "construction",
  agriculture: "agriculture",
  manufacturing: "manufacturing",
  machinery: "machinery",
  industrial: "industrial",
};

// Sprint 3: Technical Knowledge Base — full pages at /technical/*
const technicalTopics = [
  { title: "Hydraulic Hose Size Guide", href: "/technical/hose-size-guide", desc: "Dash size, ID/OD, R1AT/R2AT/4SP/4SH, pressure & bend radius." },
  { title: "BSP vs JIS Thread Identification", href: "/technical/bsp-vs-jis", desc: "Identify BSPP, BSPT, JIS metric, and flare fittings." },
  { title: "ORFS Fittings Guide", href: "/technical/orfs-fittings", desc: "O-Ring Face Seal: male, female, O-ring types." },
  { title: "SAE Flange Code 61 vs Code 62", href: "/technical/sae-flange", desc: "3000 PSI vs 6000 PSI, flange sizes & configurations." },
  { title: "Crimping Guide", href: "/technical/crimping-guide", desc: "Crimp diameter, tolerance, COL, skiving & QC." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* CORE SERVICES */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            tag="Our Services"
            title="What We Can Do For You"
            desc="From hose assembly to emergency replacement — we keep your machinery running."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon name={serviceIcons[s.icon] ?? "wrench"} className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent/70">
                  {s.short}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel/80">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-[#f0f2f5] py-20">
        <div className="container-x">
          <SectionHeading
            tag="Products"
            title="Hydraulic Hose & Fittings Range"
            desc="Product categories we stock and assemble. Need a specific spec? Send us a photo or sample."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-xl bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent/70">
                  {p.nameZh}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel/80">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.items.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-steel/5 px-3 py-1 text-xs font-medium text-steel"
                    >
                      {item}
                    </span>
                  ))}
                  {p.items.length > 4 && (
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      +{p.items.length - 4} more
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TERRA */}
      <section className="bg-primary py-20 text-white">
        <div className="container-x">
          <SectionHeading
            tag="Why Terra"
            title="Why Customers Choose Terra"
            desc="Not just a hose supplier — a hydraulic engineering partner."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyTerra.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 p-4"
              >
                <Icon name="check" className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2.2} />
                <span className="text-sm font-medium text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            tag="Industries"
            title="Industries We Serve"
            desc="Hydraulic solutions across mobile and industrial applications."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries#${ind.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 p-6 text-center hover:border-accent/40 hover:shadow-card transition-all"
              >
                <Icon name={industryIcons[ind.icon] ?? "industrial"} className="w-8 h-8 text-steel group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium text-primary">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL KNOWLEDGE */}
      <section className="bg-[#f0f2f5] py-20">
        <div className="container-x">
          <SectionHeading
            tag="Technical Guide"
            title="We Know Hydraulics"
            desc="Free technical guides to help you identify the right hose and fitting."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalTopics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <Icon name="arrow" className="w-5 h-5 text-accent shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel/70">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            tag="Product Gallery"
            title="Real Stock, Real Photos"
            desc="Actual products we stock and assemble. Click to view — or WhatsApp us the size you need."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 9 }, (_, i) => (
              <a
                key={i}
                href={waLink(`Hi Terra Hose, I'd like to enquire about this product (photo ${i + 1}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg shadow-card"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`/images/product-${i + 1}.jpg`}
                    alt={`Hydraulic product ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-accent py-20 text-white">
        <div className="container-x relative flex flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
            Need a Custom Hose Assembly?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Send us your sample, specification or a photo — we&apos;ll identify it,
            assemble it and deliver it. {site.hours}.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded bg-white px-7 py-3.5 font-semibold text-accent hover:bg-primary hover:text-white transition-colors"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <Link
              href="/request-quote"
              className="flex items-center justify-center gap-2 rounded border border-white/40 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              <Icon name="quote" className="w-5 h-5" />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
