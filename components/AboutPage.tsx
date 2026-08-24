import Link from "next/link";
import { Icon } from "./Icon";
import { waLink, site } from "@/lib/site";
import { about } from "@/data/about";

export function AboutPage() {
  const waHref = waLink("Hi Terra Hose, I'd like to know more about your services.");

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-steel/40">About Us</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">About Us</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              Terra Hose & Hydraulic Engineering
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Hydraulic hose assembly specialist based in Johor, Malaysia.
              We help customers identify, supply, and install the right hydraulic hose and fittings —
              fast.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {about.sections.map((sec) => (
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
              <h2 className="font-display text-2xl font-bold text-primary mb-5">Our Capabilities</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {about.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4">
                    <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.2} />
                    <span className="text-sm font-medium text-steel/80">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TEAM */}
            {about.team.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-5">Our Team</h2>
                <div className="space-y-4">
                  {about.team.map((member) => (
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
              <h3 className="font-display text-lg font-semibold text-primary mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a href={`tel:+60167728500`} className="flex items-center gap-3 text-sm text-steel/80 hover:text-accent transition-colors">
                  <Icon name="phone" className="w-4 h-4 text-accent shrink-0" />
                  {about.location.city} — {site.phone}
                </a>
                <a href={waLink("Hi Terra Hose, I'd like to know more about your services.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-steel/80 hover:text-accent transition-colors">
                  <Icon name="whatsapp" className="w-4 h-4 text-accent shrink-0" />
                  WhatsApp Us
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
              <h3 className="font-display text-base font-semibold text-primary mb-3">What We Don&apos;t Do</h3>
              <p className="text-xs text-steel/60 leading-relaxed">
                We are honest about our capabilities. We do not claim to be an authorized distributor
                for any brand we are not. If we don&apos;t have it, we will tell you — and try to point you in the right direction.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-base font-semibold text-primary">Our Products & Services</h3>
              {[
                { href: "/products", label: "Browse Products →" },
                { href: "/services", label: "View Services →" },
                { href: "/industries", label: "Industries We Serve →" },
                { href: "/#gallery", label: "Product Gallery →" },
              ].map((l) => (
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
