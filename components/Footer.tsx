import Link from "next/link";
import { site, waDefault, telLink } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "./Icon";

export function Footer({ locale = "en" }: { locale?: string }) {
  const t = getDictionary(locale);

  const columns = [
    {
      title: t.footer.productsTitle,
      links: [
        { href: "/products/hydraulic-hose", label: t.footer.productsLinks["hydraulic-hose"] },
        { href: "/products/hydraulic-fittings", label: t.footer.productsLinks["hydraulic-fittings"] },
        { href: "/products/ferrules", label: t.footer.productsLinks.ferrules },
        { href: "/products/adapters", label: t.footer.productsLinks.adapters },
        { href: "/products/o-rings-seals", label: t.footer.productsLinks["o-rings-seals"] },
      ],
    },
    {
      title: t.footer.servicesTitle,
      links: [
        { href: "/services/hydraulic-hose-assembly", label: t.footer.servicesLinks["hydraulic-hose-assembly"] },
        { href: "/services/hose-crimping", label: t.footer.servicesLinks["hose-crimping"] },
        { href: "/services/hose-replacement", label: t.footer.servicesLinks["hose-replacement"] },
        { href: "/services/hydraulic-hose-repair", label: t.footer.servicesLinks["hydraulic-hose-repair"] },
        { href: "/services/custom-hose-assembly", label: t.footer.servicesLinks["custom-hose-assembly"] },
      ],
    },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        {/* 品牌 */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.jpg" alt="Terra Hose" className="h-12 w-auto object-contain" />
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
                    href={`/${locale}${link.href}`}
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
          <span>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</span>
          <a href={waDefault} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Icon name="whatsapp" className="w-3.5 h-3.5" />
            WhatsApp: {site.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
