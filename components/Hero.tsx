import Link from "next/link";
import { site, waDefault } from "@/lib/site";
import { Icon } from "./Icon";

/**
 * Hero — 第一屏必须立刻告诉客户 Terra 是谁、做什么、能拿到什么
 */
export function Hero() {
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

      <div className="container-x relative py-20 md:py-28">
        {/* Logo */}
        <img src="/logo.jpg" alt="Terra Hose" className="h-16 md:h-20 w-auto object-contain mb-6" />
        <div className="max-w-3xl">
          <span className="tag-chip mb-5">{site.tagline}</span>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-wide">
            Hydraulic Hose Assembly
            <br />
            <span className="text-accent">& Hydraulic Fittings</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/70 leading-relaxed">
            Professional hydraulic hose assembly for mobile and industrial
            applications. Custom length, custom fittings, precision crimping —
            engineered in Johor, Malaysia.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/request-quote"
              className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold hover:bg-accent-dark transition-colors"
            >
              <Icon name="quote" className="w-5 h-5" />
              Request a Quote
            </Link>
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* 底部能力条 */}
      <div className="relative border-t border-white/10 bg-primary-dark/60">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { icon: "wrench" as const, label: "Hydraulic Hose" },
            { icon: "crimp" as const, label: "Fittings" },
            { icon: "custom" as const, label: "Hose Assembly" },
            { icon: "repair" as const, label: "Engineering Service" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-4">
              <Icon name={item.icon} className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white/85">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
