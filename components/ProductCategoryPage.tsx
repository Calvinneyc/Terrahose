import Link from "next/link";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { waLink } from "@/lib/site";

interface Spec {
  label: string;
  value: string;
}

interface ProductType {
  name: string;
  description?: string;
}

interface ProductCategoryProps {
  tag?: string;
  title: string;
  description: string;
  specs?: Spec[];
  types?: ProductType[];
  standards?: string[];
  sizes?: string[];
  materials?: string[];
  applications?: string[];
  notes?: string[];
  whatsappSubject?: string;
  parentSlug?: string;
  siblings?: { slug: string; name: string }[];
}

export function ProductCategoryPage({
  tag,
  title,
  description,
  specs = [],
  types = [],
  standards = [],
  sizes = [],
  materials = [],
  applications = [],
  notes = [],
  whatsappSubject,
  parentSlug = "/products",
  siblings = [],
}: ProductCategoryProps) {
  const waHref = waLink(
    whatsappSubject ??
      `Hi Terra Hose, I'm interested in ${title}. Can you check stock and give me a price?`
  );

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href={parentSlug} className="hover:text-accent transition-colors">
              {parentSlug === "/products" ? "Products" : parentSlug === "/services" ? "Services" : "Products"}
            </Link>
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
              <a href={`tel:${waHref.replace("https://wa.me/", "")}`} className="hidden" />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {specs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Specifications</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 shadow-card">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map((s, i) => (
                        <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fb]"}>
                          <td className="px-5 py-3 font-medium text-steel/80 border-r border-gray-100 w-2/5">{s.label}</td>
                          <td className="px-5 py-3 text-primary font-medium">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {types.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Types Available</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {types.map((t) => (
                    <div key={t.name} className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
                      <h3 className="font-display text-base font-semibold text-primary">{t.name}</h3>
                      {t.description && (
                        <p className="mt-1.5 text-sm text-steel/70">{t.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {standards.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Standards & Ratings</h2>
                <div className="flex flex-wrap gap-3">
                  {standards.map((s) => (
                    <span key={s} className="rounded-full bg-accent/10 border border-accent/30 px-4 py-2 text-sm font-medium text-accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {applications.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Common Applications</h2>
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

            {/* PHOTO GALLERY LINK */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-2">View Our Stock Photos</h3>
              <p className="text-sm text-steel/70 mb-4">
                See actual product photos in our gallery. Click any image to WhatsApp us about that product.
              </p>
              <Link href="/#gallery" className="text-sm font-medium text-accent hover:underline">
                Go to Product Gallery →
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* QUICK ENQUIRY */}
            <div className="rounded-xl border border-accent/30 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-1">Quick Enquiry</h3>
              <p className="text-xs text-steel/60 mb-4">Get stock check + price in minutes</p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <a href={`tel:+60167728500`} className="mt-3 flex items-center justify-center gap-2 rounded border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors">
                <Icon name="phone" className="w-4 h-4" />
                Call +60 16-772 8500
              </a>
            </div>

            {/* SIZES */}
            {sizes.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-base font-semibold text-primary mb-3">Common Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <span key={s} className="rounded-full bg-steel/5 px-3 py-1 text-xs font-medium text-steel">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* MATERIALS */}
            {materials.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-base font-semibold text-primary mb-3">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {materials.map((m) => (
                    <span key={m} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* SIBLING PAGES */}
            {siblings.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-base font-semibold text-primary mb-3">Other Products</h3>
                <ul className="space-y-2">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/products/${s.slug}`}
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
            <h3 className="font-display text-xl font-bold text-primary">Need a specific spec?</h3>
            <p className="mt-1 text-sm text-steel/70">Send us the hose size, fitting type, or a photo via WhatsApp.</p>
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
