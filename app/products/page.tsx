import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { productCategories } from "@/data/products";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages.products;
  return { title: p.title, description: p.description };
}

const iconMap: Record<string, string> = {
  "hydraulic-hose": "wrench",
  "hydraulic-fittings": "crimp",
  "ferrules": "crimp",
  "adapters": "replace",
  "o-rings-seals": "wrench",
  "accessories": "construction",
};

export default function ProductsPage() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-steel/40">Products</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">Products</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              Hydraulic Hose & Fittings
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Complete range of hydraulic hose, fittings, ferrules, adapters, seals, and accessories.
              Stocked in Johor. No minimum order.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <div className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <Icon name={(iconMap[cat.slug] ?? "wrench") as any} className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {cat.name}
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-accent/70 mt-0.5">{cat.nameZh}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel/80">{cat.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.items.slice(0, 5).map((item) => (
                  <span key={item} className="rounded-full bg-steel/5 px-2.5 py-0.5 text-xs text-steel">
                    {item}
                  </span>
                ))}
                {cat.items.length > 5 && (
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                    +{cat.items.length - 5} more
                  </span>
                )}
              </div>
              <div className="mt-5 text-sm font-medium text-accent group-hover:underline">
                View Products →
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-10 rounded-xl border border-gray-100 bg-white p-6 shadow-card">
          <h3 className="font-display text-lg font-semibold text-primary mb-2">Can&apos;t find what you need?</h3>
          <p className="text-sm text-steel/70 mb-4">
            We stock many more sizes and types not listed here. Send us a WhatsApp message with
            what you need — hose size, fitting type, or a photo of the part.
          </p>
          <a
            href="https://wa.me/60167728500?text=Hi%20Terra%20Hose%2C%20I%27m%20looking%20for%20hydraulic%20products.%20Can%20you%20help%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
