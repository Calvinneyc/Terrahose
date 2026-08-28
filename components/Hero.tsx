import Link from "next/link";
import { site, waDefault } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "./Icon";

const capabilityIcons = ["wrench", "crimp", "custom", "repair"] as const;

/**
 * Hero — 第一屏必须立刻告诉客户 Terra 是谁、做什么、能拿到什么
 */
export function Hero({ locale = "en" }: { locale?: string }) {
  const t = getDictionary(locale);

  const capabilities = t.hero.capabilities.map((label, i) => ({
    icon: capabilityIcons[i] ?? "wrench",
    label,
  }));

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {/* 工业网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* 橙色光晕 */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-x relative py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Text Content */}
          <div className="max-w-2xl flex-1">
            <span className="tag-chip mb-5">{t.hero.tagline}</span>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-wide">
              {t.hero.title1}
              <br />
              <span className="text-accent">{t.hero.title2}</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/70 leading-relaxed">
              {t.hero.desc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-quote"
                className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold hover:bg-accent-dark transition-colors"
              >
                <Icon name="quote" className="w-5 h-5" />
                {t.hero.cta1}
              </Link>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Right: Company Logo */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/10 rounded-full blur-2xl" />
              <img
                src="/logo.png"
                alt="Terra Hose & Hydraulic Engineering"
                className="relative w-[280px] h-auto object-contain drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 底部能力条 */}
      <div className="relative border-t border-white/10 bg-primary-dark/60">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {capabilities.map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-4">
              <Icon name={item.icon as any} className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white/85">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
