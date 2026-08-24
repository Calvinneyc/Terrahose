import Link from "next/link";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { waLink } from "@/lib/site";

interface IdentStep {
  step: number;
  title: string;
  description: string;
}

interface SpecRow {
  label: string;
  value: string;
}

interface GuideSection {
  title: string;
  content: string;
}

interface ProductLink {
  name: string;
  slug: string;
  reason: string;
}

interface TechnicalGuideProps {
  tag?: string;
  title: string;
  tagline?: string;
  description: string;
  identificationTitle?: string;
  identificationDesc?: string;
  identSteps?: IdentStep[];
  specs?: SpecRow[];
  sections?: GuideSection[];
  productLinks?: ProductLink[];
  bottomCta?: {
    title: string;
    desc: string;
    subject: string;
  };
  siblings?: { slug: string; name: string }[];
}

export function TechnicalGuidePage({
  tag = "Technical Guide",
  title,
  tagline,
  description,
  identificationTitle = "How to Identify",
  identificationDesc,
  identSteps = [],
  specs = [],
  sections = [],
  productLinks = [],
  bottomCta,
  siblings = [],
}: TechnicalGuideProps) {
  const defaultSubject = `Hi Terra Hose, I need help with ${title}. Can you give me a quote?`;
  const waHref = waLink(bottomCta?.subject ?? defaultSubject);
  const allSiblings = siblings.length > 0 ? siblings : [
    { slug: "hose-size-guide", name: "Hose Size Guide" },
    { slug: "bsp-vs-jis", name: "BSP vs JIS Threads" },
    { slug: "orfs-fittings", name: "ORFS Fittings" },
    { slug: "sae-flange", name: "SAE Flange" },
    { slug: "crimping-guide", name: "Crimping Guide" },
  ];

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#technical-knowledge" className="hover:text-accent transition-colors">Technical Guide</Link>
            <span>/</span>
            <span className="text-steel/40">{title}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white relative overflow-hidden">
        {/* Background Logo Watermark */}
        <img src="/logo.jpg" alt="" className="absolute left-8 top-1/2 -translate-y-1/2 w-[280px] h-auto opacity-[0.07] pointer-events-none select-none hidden lg:block" />
        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            {tag && <span className="tag-chip mb-4">{tag}</span>}
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">{title}</h1>
            {tagline && (
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">{tagline}</p>
            )}
            <p className="mt-4 text-lg text-white/70 leading-relaxed">{description}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Ask for Help
              </a>
              <Link
                href="/#technical-knowledge"
                className="flex items-center justify-center gap-2 rounded border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
              >
                ← All Technical Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-12">

            {/* IDENTIFICATION SECTION */}
            {identSteps.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-primary mb-2">{identificationTitle}</h2>
                  {identificationDesc && (
                    <p className="text-sm text-steel/70 leading-relaxed">{identificationDesc}</p>
                  )}
                </div>
                <div className="space-y-4">
                  {identSteps.map((step) => (
                    <div key={step.step} className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-card">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-base font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-primary">{step.title}</h3>
                        <p className="mt-1 text-sm text-steel/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SPECS TABLE */}
            {specs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Technical Specifications</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 shadow-card">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map((s, i) => (
                        <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fb]"}>
                          <td className="px-5 py-3.5 font-medium text-steel/80 border-r border-gray-100 w-2/5">{s.label}</td>
                          <td className="px-5 py-3.5 text-primary font-medium">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* CUSTOM SECTIONS */}
            {sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="font-display text-2xl font-bold text-primary mb-4">{sec.title}</h2>
                <p className="text-sm text-steel/80 leading-relaxed whitespace-pre-line">{sec.content}</p>
              </div>
            ))}

            {/* PRODUCT LINKS */}
            {productLinks.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-primary mb-1">Related Products</h3>
                <p className="text-xs text-steel/60 mb-5">Shop the products mentioned in this guide</p>
                <div className="space-y-3">
                  {productLinks.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-start gap-3 rounded-lg border border-gray-100 p-4 hover:border-accent/40 hover:shadow-card transition-all group"
                    >
                      <Icon name="arrow" className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{p.name}</span>
                        <p className="mt-0.5 text-xs text-steel/60">{p.reason}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* QUOTE / IDENT HELP CTA */}
            <div className="rounded-2xl border-2 border-accent/20 bg-accent/5 p-8 text-center">
              <h3 className="font-display text-xl font-bold text-primary mb-2">
                {bottomCta?.title ?? "Need help identifying your part?"}
              </h3>
              <p className="text-sm text-steel/70 mb-6 max-w-lg mx-auto">
                {bottomCta?.desc ?? "Not sure which spec you need? Send us a photo via WhatsApp — we identify it and quote you on the spot."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={waLink(bottomCta?.subject ?? defaultSubject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold hover:bg-accent-dark transition-colors"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  Upload Photo / Get Quote
                </a>
                <Link
                  href="/request-quote"
                  className="flex items-center justify-center gap-2 rounded border border-accent/30 px-7 py-3.5 font-semibold text-accent hover:bg-accent/10 transition-colors"
                >
                  <Icon name="quote" className="w-5 h-5" />
                  Request Formal Quote
                </Link>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* QUICK ENQUIRY */}
            <div className="rounded-xl border border-accent/30 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-1">Quick Enquiry</h3>
              <p className="text-xs text-steel/60 mb-4">Get identification help + quote in minutes</p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:+60167728500"
                className="mt-3 flex items-center justify-center gap-2 rounded border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Icon name="phone" className="w-4 h-4" />
                Call +60 16-772 8500
              </a>
            </div>

            {/* OTHER GUIDES */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-3">All Technical Guides</h3>
              <ul className="space-y-2">
                {allSiblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/technical/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-steel/70 hover:text-accent transition-colors"
                    >
                      <Icon name="arrow" className="w-3.5 h-3.5 text-accent/60" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-3">Our Services</h3>
              <ul className="space-y-2">
                {[
                  { slug: "hydraulic-hose-assembly", name: "Custom Hose Assembly" },
                  { slug: "hose-crimping", name: "Hose Crimping Service" },
                  { slug: "hose-replacement", name: "Hose Replacement" },
                ].map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-steel/70 hover:text-accent transition-colors"
                    >
                      <Icon name="arrow" className="w-3.5 h-3.5 text-accent/60" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
