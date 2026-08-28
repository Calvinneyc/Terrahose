import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductGallery } from "@/components/ProductGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icon";
import { getDictionary } from "@/lib/i18n";
import { site, waDefault } from "@/lib/site";
import { technicalSlugs } from "@/lib/content";

const serviceSlugs = [
  "hydraulic-hose-assembly",
  "hose-crimping",
  "hose-replacement",
  "hydraulic-hose-repair",
  "custom-hose-assembly",
  "onsite-emergency",
] as const;

const productSlugs = [
  "hydraulic-hose",
  "hydraulic-fittings",
  "ferrules",
  "adapters",
  "o-rings-seals",
  "accessories",
] as const;

const industrySlugs = [
  "construction",
  "agriculture",
  "manufacturing",
  "heavy-machinery",
  "industrial",
] as const;

const serviceIconMap: Record<string, IconName> = {
  "hydraulic-hose-assembly": "wrench",
  "hose-crimping": "crimp",
  "hose-replacement": "replace",
  "hydraulic-hose-repair": "repair",
  "custom-hose-assembly": "custom",
  "onsite-emergency": "truck",
};

const industryIconMap: Record<string, IconName> = {
  construction: "construction",
  agriculture: "agriculture",
  manufacturing: "manufacturing",
  "heavy-machinery": "machinery",
  industrial: "industrial",
};

// SEO: descriptive product image alt text (image search + accessibility)
const productAlts = [
  "Hydraulic Hose Assembly — SAE 100 R1/R2 crimped hose, Malaysia",
  "Hydraulic Hose Fittings — JIC / ORFS / BSP adapters",
  "Ferrules for Hydraulic Hose Crimping",
  "Hydraulic Hose Adapters — Steel fittings Johor",
  "O-Rings and Seals for Hydraulic Systems",
  "Custom Hydraulic Hose Assembly — Crimping service",
  "High Pressure Hydraulic Hose — EN 856 4SP / 4SH",
  "Hydraulic Hose Replacement & Repair parts",
  "Hydraulic Hose Accessories & Connectors",
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  const technicalTopics = t.technical.items.map((item, i) => ({
    ...item,
    slug: technicalSlugs[i] ?? "",
  }));

  return (
    <>
      <Hero locale={locale} />

      {/* PHOTO QUOTE — 拍照报价（核心差异化卖点） */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-2xl border border-gray-100 bg-[#f0f2f5] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="tag-chip mb-4">{t.photoQuote.tag}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
                  {t.photoQuote.title1}
                  <br />
                  <span className="text-accent">{t.photoQuote.title2}</span>
                </h2>
                <p className="mt-4 max-w-lg text-steel/80 leading-relaxed">
                  {t.photoQuote.desc}
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <a
                    href={waDefault}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold text-white hover:bg-accent-dark transition-colors"
                  >
                    <Icon name="whatsapp" className="w-5 h-5" />
                    {t.photoQuote.cta1}
                  </a>
                  <Link
                    href={`/${locale}/request-quote`}
                    className="flex items-center justify-center gap-2 rounded border border-steel/20 px-7 py-3.5 font-semibold text-primary hover:bg-white transition-colors"
                  >
                    <Icon name="quote" className="w-5 h-5" />
                    {t.photoQuote.cta2}
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                {t.photoQuote.steps.map((s, i) => (
                  <div
                    key={s.t}
                    className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-card"
                  >
                    <span className="font-display text-2xl font-bold text-accent leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-primary">{s.t}</h3>
                      <p className="mt-1 text-sm text-steel/70">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            tag={t.services.tag}
            title={t.services.title}
            desc={t.services.desc}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSlugs.map((slug) => {
              const s = t.services.items[slug];
              return (
                <Link
                  key={slug}
                  href={`/${locale}/services/${slug}`}
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name={serviceIconMap[slug] ?? "wrench"} className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent/70">
                    {s.short}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel/80">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-[#f0f2f5] py-20">
        <div className="container-x">
          <SectionHeading
            tag={t.products.tag}
            title={t.products.title}
            desc={t.products.desc}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productSlugs.map((slug) => {
              const p = t.products.items[slug];
              return (
                <Link
                  key={slug}
                  href={`/${locale}/products/${slug}`}
                  className="group rounded-xl bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent/70">
                    {p.sub}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel/80">{p.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TERRA */}
      <section className="bg-primary py-20 text-white">
        <div className="container-x">
          <SectionHeading
            tag={t.why.tag}
            title={t.why.title}
            desc={t.why.desc}
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((item) => (
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

      {/* TYPE APPROVALS */}
      <section className="py-12 bg-[#f0f2f5]">
        <div className="container-x text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-steel/40 mb-3">
            {t.approvals.tag}
          </p>
          <p className="text-sm text-steel/50 max-w-2xl mx-auto leading-relaxed">
            {t.approvals.desc}
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            tag={t.industries.tag}
            title={t.industries.title}
            desc={t.industries.desc}
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {industrySlugs.map((slug) => (
              <Link
                key={slug}
                href={`/${locale}/industries/${slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 p-6 text-center hover:border-accent/40 hover:shadow-card transition-all"
              >
                <Icon name={industryIconMap[slug] ?? "industrial"} className="w-8 h-8 text-steel group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium text-primary">{t.industries.items[slug]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL KNOWLEDGE */}
      <section className="bg-[#f0f2f5] py-20">
        <div className="container-x">
          <SectionHeading
            tag={t.technical.tag}
            title={t.technical.title}
            desc={t.technical.desc}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/technical/${topic.slug}`}
                className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <Icon name="arrow" className="w-5 h-5 text-accent shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel/70">{topic.desc}</p>
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
            tag={t.gallery.tag}
            title={t.gallery.title}
            desc={t.gallery.desc}
          />
          <ProductGallery
            locale={locale}
            images={[
              ...Array.from({ length: 9 }, (_, i) => ({
                src: `/images/product-${i + 1}.jpg`,
                alt: productAlts[i],
                wa: `photo ${i + 1}`,
              })),
              {
                src: "/images/fittings-mix.jpg",
                alt: "Assorted hydraulic fittings and adapters — Johor, Malaysia",
                wa: "photo 10",
              },
              {
                src: "/images/all-thread.jpg",
                alt: "Hydraulic fittings — all thread standards (JIC, ORFS, BSP, JIS, NPT)",
                wa: "photo 11",
              },
            ]}
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-accent py-20 text-white">
        <div className="container-x relative flex flex-col items-center text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
            {t.finalCta.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            {t.finalCta.desc}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded bg-white px-7 py-3.5 font-semibold text-accent hover:bg-primary hover:text-white transition-colors"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              {t.finalCta.cta1}
            </a>
            <Link
              href={`/${locale}/request-quote`}
              className="flex items-center justify-center gap-2 rounded border border-white/40 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              <Icon name="quote" className="w-5 h-5" />
              {t.finalCta.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
