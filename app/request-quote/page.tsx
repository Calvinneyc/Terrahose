import { Metadata } from "next";
import { waLink } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Terra Hose & Hydraulic Engineering | Johor, Malaysia",
  description:
    "Request a quote for hydraulic hose assembly, fittings, or hydraulic services in Johor, Malaysia. Fast response via WhatsApp or phone.",
};

const quoteTemplates = [
  {
    label: "Custom Hose Assembly",
    subject: `Hi Terra Hose, I'd like to request a quote for a custom hose assembly.
Hose type: [e.g., SAE R2AT / EN 853 2SN]
Size: [dash size or ID/OD]
Fitting type: [e.g., BSP, JIS, ORFS]
Quantity: [number of assemblies]
Length: [mm or inches each]
Other notes: [any special requirements]`,
  },
  {
    label: "Hydraulic Fittings",
    subject: `Hi Terra Hose, I'd like to request a quote for hydraulic fittings.
Fitting type: [e.g., BSP elbow, ORFS male, SAE flange]
Size: [e.g., 1/2" BSP, -8 ORFS]
Quantity: [number needed]
Other notes: [any special requirements]`,
  },
  {
    label: "Hose Replacement (On-Site)",
    subject: `Hi Terra Hose, I'd like to request a quote for on-site hose replacement service.
Equipment: [e.g., Hitachi ZX200 Excavator]
Number of hoses: [how many need replacing]
Location: [area in Johor]
Preferred timing: [ASAP / this week / etc.]`,
  },
  {
    label: "Hose Crimping Service",
    subject: `Hi Terra Hose, I'd like to request a quote for hose crimping service.
Hose type: [e.g., R2AT / 4SP]
Quantity: [number of hoses]
Ferrule needed: [yes / no / I have ferrules]
Can deliver to workshop: [yes / no]`,
  },
  {
    label: "Bulk / Repeat Order",
    subject: `Hi Terra Hose, I'd like to request a quote for a bulk or repeat order.
Description: [what you need]
Estimated quantity: [number per month or per order]
Frequency: [one-time / monthly / quarterly]
Current supplier: [who you're currently buying from]`,
  },
];

export default function RequestQuotePage() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span className="text-steel/40">Request a Quote</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="tag-chip mb-4">No Obligation</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              Request a Quote
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Tell us what you need — we respond fast, usually within the hour during business hours.
              WhatsApp is the fastest way to get a quote.
            </p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* MAIN: TEMPLATE SELECTOR + FORM */}
          <div className="lg:col-span-2 space-y-8">

            {/* WhatsApp CTA — PRIMARY */}
            <div className="rounded-2xl bg-accent p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Fastest Way to Get a Quote
              </h2>
              <p className="text-sm text-white/80 mb-6">
                Click any template below — it opens WhatsApp with a pre-filled message.
                Mon–Sat, 8:30 AM – 6:00 PM.
              </p>
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                {quoteTemplates.map((t) => (
                  <a
                    key={t.label}
                    href={waLink(t.subject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-primary hover:bg-zinc-50 hover:shadow-lg transition-all text-left"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366] shrink-0" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>{t.label}</span>
                    <span className="ml-auto text-xs text-steel/50">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FORM — SECONDARY */}
            <QuoteForm />
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* DIRECT CONTACT */}
            <div className="rounded-xl border border-accent/30 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary mb-3">Direct Contact</h3>
              <a
                href={waLink("Hi Terra Hose, I'd like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp +60 16-772 8500
              </a>
              <a
                href="tel:+60167728500"
                className="flex items-center justify-center gap-2 rounded border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                📞 Call +60 16-772 8500
              </a>
            </div>

            {/* RESPONSE TIME */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-3">What Happens Next?</h3>
              <ul className="space-y-3">
                {[
                  { step: "1", text: "We receive your message instantly via WhatsApp" },
                  { step: "2", text: "We check stock and prepare a quotation" },
                  { step: "3", text: "You receive our reply — usually within 1 hour" },
                  { step: "4", text: "Confirm order — we assemble and deliver fast" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">{item.step}</div>
                    <span className="text-sm text-steel/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VISIT WORKSHOP */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-primary mb-1">Visit Our Workshop</h3>
              <p className="text-xs text-steel/60 mb-3">Walk-ins welcome during business hours</p>
              <p className="text-sm text-steel/80 leading-relaxed">
                190-5, Jalan Saleng 10,<br />
                Kulai, Johor 81400,<br />
                Malaysia
              </p>
              <p className="mt-2 text-xs text-steel/60">
                Mon–Sat: 8:30 AM – 6:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
