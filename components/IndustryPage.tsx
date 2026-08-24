import Link from "next/link";
import { Icon } from "./Icon";
import { waLink } from "@/lib/site";

interface IndustryPageProps {
  tag?: string;
  title: string;
  iconName?: string;
  description: string;
  challenges?: string[];
  solutions?: string[];
  commonEquipment?: string[];
  notes?: string[];
  whatsappSubject?: string;
  siblings?: { slug: string; name: string }[];
}

export function IndustryPage({
  tag = "Industries",
  title,
  iconName = "construction",
  description,
  challenges = [],
  solutions = [],
  commonEquipment = [],
  notes = [],
  whatsappSubject,
  siblings = [],
}: IndustryPageProps) {
  const waHref = waLink(
    whatsappSubject ??
      `Hi Terra Hose, I need hydraulic hose for ${title} equipment. Can you help?`
  );

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-accent transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-steel/40">{title}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            {tag && <span className="tag-chip mb-4">{tag}</span>}
            <div className="flex items-center gap-4 mb-4">
              <Icon name={iconName as any} className="w-12 h-12 text-accent" />
              <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">{title}</h1>
            </div>
            <p className="mt-3 text-lg text-white/70 leading-relaxed">{description}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {challenges.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Common Challenges</h2>
                <div className="space-y-3">
                  {challenges.map((c) => (
                    <div key={c} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4">
                      <Icon name="wrench" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-steel/80">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {solutions.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">How Terra Hose Helps</h2>
                <div className="space-y-3">
                  {solutions.map((s) => (
                    <div key={s} className="flex items-start gap-3 rounded-lg border border-accent/20 bg-accent/5 p-4">
                      <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.2} />
                      <span className="text-sm font-medium text-steel/80">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {commonEquipment.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Equipment We Support</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {commonEquipment.map((e) => (
                    <div key={e} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3">
                      <Icon name="arrow" className="w-4 h-4 text-steel/50 shrink-0" />
                      <span className="text-sm font-medium text-steel/80">{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {notes.length > 0 && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="font-display text-base font-semibold text-amber-800 mb-3">📋 Notes</h3>
                <ul className="space-y-2">
                  {notes.map((n) => (
                    <li key={n} className="text-sm text-amber-700">• {n}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-xl border border-accent/30 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-1">Need Hose for {title}?</h3>
              <p className="text-xs text-steel/60 mb-4">WhatsApp us your equipment model or a photo</p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </div>

            {siblings.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-base font-semibold text-primary mb-3">Other Industries</h3>
                <ul className="space-y-2">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/industries/${s.slug}`}
                        className="text-sm text-steel/70 hover:text-accent transition-colors"
                      >
                        → {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-3">Related Services</h3>
              <ul className="space-y-2">
                {[
                  { slug: "hydraulic-hose-assembly", name: "Hose Assembly" },
                  { slug: "hose-replacement", name: "Hose Replacement" },
                  { slug: "hose-crimping", name: "Hose Crimping" },
                ].map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-steel/70 hover:text-accent transition-colors"
                    >
                      → {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section className="bg-[#f0f2f5] py-12">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-xl font-bold text-primary">Equipment down?</h3>
            <p className="mt-1 text-sm text-steel/70">Send us a photo via WhatsApp — we can identify the hose and quote fast.</p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold shrink-0 hover:bg-accent-dark transition-colors"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            Get Help Fast
          </a>
        </div>
      </section>
    </>
  );
}
