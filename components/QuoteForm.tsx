"use client";

import { waLink } from "@/lib/site";

export function QuoteForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parts = Array.from(fd.entries())
      .filter(([, v]) => typeof v === "string" && (v as string).trim() !== "")
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.open(waLink(`Quote Request:\n\n${parts}`), "_blank");
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-card">
      <h2 className="font-display text-2xl font-bold text-primary mb-1">Or Fill In This Form</h2>
      <p className="text-sm text-steel/60 mb-6">
        We read every message and respond within 1-2 hours during business hours.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-steel mb-1.5" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="e.g. Tan Ah Kow"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-steel mb-1.5" htmlFor="phone">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+60 ..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-steel mb-1.5" htmlFor="email">
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-steel mb-1.5" htmlFor="equipment">
            Equipment / Machine
          </label>
          <input
            id="equipment"
            name="equipment"
            type="text"
            placeholder="e.g. CAT 320 Excavator, Komatsu Forklift"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-steel mb-1.5" htmlFor="requirements">
            What Do You Need?
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows={4}
            required
            placeholder="Describe the hose, fittings, or service you need. Include: hose type (R1AT/R2AT/4SP), size, fitting type (BSP/JIS/ORFS), quantity, and any other details."
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-7 py-3.5 font-semibold text-white hover:bg-accent-dark transition-colors"
        >
          Send via WhatsApp →
        </button>
      </form>
    </div>
  );
}
