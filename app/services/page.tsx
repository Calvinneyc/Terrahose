import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { services } from "@/data/services";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages.services;
  return { title: p.title, description: p.description };
}

const iconMap: Record<string, string> = {
  wrench: "wrench",
  crimp: "crimp",
  replace: "replace",
  repair: "repair",
  custom: "custom",
  truck: "truck",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-steel/40">Services</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">Our Services</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              Hydraulic Services
            </h1>
            <p className="mt-4 text-lg text-white/70">
              From custom hose assembly to emergency replacement — we help you get back to work fast.
              Workshop in Kulai, Johor.
            </p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <Icon name={(iconMap[s.icon] ?? "wrench") as any} className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {s.title}
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-accent/70 mt-0.5">{s.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel/80">{s.description}</p>
              <div className="mt-5 text-sm font-medium text-accent group-hover:underline">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
