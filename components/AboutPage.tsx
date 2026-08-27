import Link from "next/link";
import { Icon } from "./Icon";
import { waLink, site } from "@/lib/site";
import { about } from "@/data/about";
import { getDictionary } from "@/lib/i18n";

export function AboutPage({ locale = "en" }: { locale?: string }) {
  const t = getDictionary(locale);
  const u = t.ui.about;
  const c = t.ui.common;
  const content = about.localized[locale] ?? about.localized.en;

  const waHref = waLink("Hi Terra Hose, I'd like to know more about your services.");

  const navLinks = [
    { href: `/${locale}/products`, label: u.browseProducts },
    { href: `/${locale}/services`, label: u.viewServices },
    { href: `/${locale}/industries`, label: u.industriesWeServe },
    { href: `/${locale}/#gallery`, label: u.productGallery },
  ];

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href={`/${locale}`} className="hover:text-accent transition-colors">{c.home}</Link>
            <span>/</span>
            <span className="text-steel/40">{u.breadcrumb}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">{u.tag}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              {u.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">{u.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {content.sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="font-display text-2xl font-bold text-primary mb-4">{sec.title}</h2>
                <div className="text-sm leading-relaxed text-steel/80 space-y-3">
                  {sec.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("1. ") || para.startsWith("2. ") || para.startsWith("3. ")) {
                      return (
                        <div key={i} className="pl-4">
                          {para.split("\n").map((line, j) => {
                            const match = line.match(/^(\d)\.\s\*\*(.+?)\*\*(.+)$/);
                            if (match) {
                              return (
                                <div key={j} className="mb-2">
                                  <span className="font-semibold text-primary">{match[1]}. {match[2]}</span>
                                  <span className="text-steel/70">{match[3]}</span>
                                </div>
                              );
                            }
                            return <p key={j} className="text-steel/70">{line}</p>;
                          })}
                        </div>
                      );
                    }
                    return <p key={i}>{para}</p>;
                  })}
                </div>
              </div>
            ))}

            {/* CAPABILITIES */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-5">{u.capabilities}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4">
                    <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.2} />
                    <span className="text-sm font-medium text-steel/80">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TEAM */}
            {content.team.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">{u.team}</h2>
                <div className="space-y-4">
                  {content.team.map((member) => (
                    <div key={member.role} className="rounded-xl border border-gray-100 bg-white p-5">
                      <h3 className="font-display text-base font-semibold text-primary">{member.role}</h3>
                      <p className="mt-1 text-sm text-steel/70">{member.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-xl border border-accent/30 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-4">{u.getInTouch}</h3>
              <div className="space-y-3">
                <a href={`tel:+60167728500`} className="flex items-center gap-3 text-sm text-steel/80 hover:text-accent transition-colors">
                  <Icon name="phone" className="w-4 h-4 text-accent shrink-0" />
                  {about.location.city} — {site.phone}
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-steel/80 hover:text-accent transition-colors">
                  <Icon name="whatsapp" className="w-4 h-4 text-accent shrink-0" />
                  {u.whatsappUs}
                </a>
                <div className="flex items-start gap-3 text-sm text-steel/80">
                  <Icon name="construction" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {about.location.address}
                </div>
                <div className="flex items-start gap-3 text-sm text-steel/80">
                  <Icon name="wrench" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {about.hours}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-3">{u.whatWeDontDo}</h3>
              <p className="text-xs text-steel/60 leading-relaxed">
                {u.whatWeDontDoDesc}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-base font-semibold text-primary">{u.ourProductsServices}</h3>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-2 text-sm text-steel/70 hover:text-accent transition-colors"
                >
                  <Icon name="arrow" className="w-4 h-4" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
