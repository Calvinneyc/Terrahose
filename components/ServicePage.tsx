import Link from "next/link";
import { Icon } from "./Icon";
import { waLink } from "@/lib/site";

interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

interface ServicePageProps {
  tag?: string;
  title: string;
  tagline?: string;
  description: string;
  process?: ServiceProcess[];
  features?: string[];
  applications?: string[];
  notes?: string[];
  whatsappSubject?: string;
  siblings?: { slug: string; name: string }[];
}

export function ServicePage({
  tag = "Our Services",
  title,
  tagline,
  description,
  process = [],
  features = [],
  applications = [],
  notes = [],
  whatsappSubject,
  siblings = [],
}: ServicePageProps) {
  const waHref = waLink(
    whatsappSubject ??
      `Hi Terra Hose, I'm interested in your ${title} service. Can you give me more details?`
  );

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
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
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {process.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-6">How It Works</h2>
                <div className="space-y-5">
                  {process.map((p) => (
                    <div key={p.step} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white">
                          {p.step}
                        </div>
                        {p.step < process.length && (
                          <div className="w-px flex-1 bg-accent/20 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-display text-base font-semibold text-primary">{p.title}</h3>
                        <p className="mt-1 text-sm text-steel/70 leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {features.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">What&apos;s Included</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4">
                      <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.2} />
                      <span className="text-sm font-medium text-steel/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {applications.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Suitable For</h2>
                <ul className="space-y-2.5">
                  {applications.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-steel/80">
                      <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.2} />
                      {a}
                    </li>
                  ))}
                </ul>
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
              <h3 className="font-display text-lg font-semibold text-primary mb-1">Get a Quote</h3>
              <p className="text-xs text-steel/60 mb-4">WhatsApp us — fastest response</p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <a href="tel:+60167728500" className="mt-3 flex items-center justify-center gap-2 rounded border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors">
                <Icon name="phone" className="w-4 h-4" />
                Call +60 16-772 8500
              </a>
            </div>

            {siblings.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-base font-semibold text-primary mb-3">Other Services</h3>
                <ul className="space-y-2">
                  {siblings.map((s) => (
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
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <section className="bg-[#f0f2f5] py-12">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-xl font-bold text-primary">Ready to get started?</h3>
            <p className="mt-1 text-sm text-steel/70">WhatsApp us your requirements — we respond fast.</p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold shrink-0 hover:bg-accent-dark transition-colors"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            Get a Quote
          </a>
        </div>
      </section>
    </>
  );
}
