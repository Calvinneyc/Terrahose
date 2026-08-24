import Link from "next/link";
import { site, waDefault, telLink } from "@/lib/site";
import { Icon } from "./Icon";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/products/hydraulic-hose", label: "Hydraulic Hose" },
      { href: "/products/hydraulic-fittings", label: "Hydraulic Fittings" },
      { href: "/products/ferrules", label: "Ferrules" },
      { href: "/products/adapters", label: "Adapters" },
      { href: "/products/o-rings-seals", label: "O-Rings & Seals" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/hydraulic-hose-assembly", label: "Hose Assembly" },
      { href: "/services/hose-crimping", label: "Hose Crimping" },
      { href: "/services/hose-replacement", label: "Hose Replacement" },
      { href: "/services/hydraulic-hose-repair", label: "Hose Repair" },
      { href: "/services/custom-hose-assembly", label: "Custom Assembly" },
    ],
  },
  // NOTE: Technical column (Sprint 4) — temporarily removed to avoid 404
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        {/* 品牌 */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-accent font-display text-xl font-bold">
              T
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold">TERRA HOSE</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Hydraulic Engineering
              </div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            {site.description}
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <a href={telLink} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Icon name="phone" className="w-4 h-4 text-accent" />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Icon name="quote" className="w-4 h-4 text-accent" />
              {site.email}
            </a>
            <div className="flex items-start gap-2">
              <Icon name="construction" className="w-4 h-4 text-accent mt-0.5" />
              <span>{site.address}</span>
            </div>
          </div>
        </div>

        {/* 链接列 */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 底部 */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-white/40">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <a href={waDefault} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Icon name="whatsapp" className="w-3.5 h-3.5" />
            WhatsApp: {site.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
