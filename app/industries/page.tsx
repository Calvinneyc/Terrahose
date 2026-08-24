import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { industries } from "@/data/industries";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages.industries;
  return { title: p.title, description: p.description };
}

const iconMap: Record<string, string> = {
  construction: "construction",
  agriculture: "agriculture",
  manufacturing: "manufacturing",
  machinery: "machinery",
  industrial: "industrial",
};

const industryDescriptions: Record<string, string> = {
  construction: "Excavators, bulldozers, cranes — hydraulic hose for all construction equipment. Fast replacement service.",
  agriculture: "Tractors, harvesters, sprayers — durable fittings for mud, dust, and outdoor conditions.",
  manufacturing: "Hydraulic presses, injection moulding, CNC — high-pressure hose and fittings for industrial production.",
  "heavy-machinery": "Mining, quarrying, off-road — R13 and 4SH hose for the most demanding applications.",
  industrial: "Factory maintenance, process plant, steel mill — complete hydraulic service for industrial plants.",
};

export default function IndustriesPage() {
  return (
    <>
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-steel/40">Industries</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">Industries</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Hydraulic hose solutions across mobile and industrial applications in Malaysia.
              From a single excavator hose to a factory maintenance program.
            </p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <Icon name={(iconMap[ind.slug] ?? "industrial") as any} className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {ind.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-steel/80">
                {industryDescriptions[ind.slug]}
              </p>
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
