"use client";

import { waLink } from "@/lib/site";

const copy = {
  en: {
    title: "Or Fill In This Form",
    desc: "We read every message and respond within 1-2 hours during business hours.",
    yourName: "Your Name",
    phone: "Phone / WhatsApp",
    email: "Email (optional)",
    equipment: "Equipment / Machine",
    whatNeed: "What Do You Need?",
    textareaPlaceholder:
      "Describe the hose, fittings, or service you need. Include: hose type (R1AT/R2AT/4SP), size, fitting type (BSP/JIS/ORFS), quantity, and any other details.",
    send: "Send via WhatsApp →",
  },
  zh: {
    title: "或填写此表单",
    desc: "我们会阅读每条消息，并在营业时间内 1-2 小时内回复。",
    yourName: "您的姓名",
    phone: "电话 / WhatsApp",
    email: "邮箱（选填）",
    equipment: "设备 / 机器",
    whatNeed: "您需要什么？",
    textareaPlaceholder:
      "描述您需要的软管、接头或服务。请注明：软管类型（R1AT/R2AT/4SP）、尺寸、接头类型（BSP/JIS/ORFS）、数量及其他细节。",
    send: "通过 WhatsApp 发送 →",
  },
  ms: {
    title: "Atau Isi Borang Ini",
    desc: "Kami membaca setiap mesej dan membalas dalam 1-2 jam pada waktu perniagaan.",
    yourName: "Nama Anda",
    phone: "Telefon / WhatsApp",
    email: "E-mel (pilihan)",
    equipment: "Peralatan / Mesin",
    whatNeed: "Apa Yang Anda Perlukan?",
    textareaPlaceholder:
      "Terangkan hos, kelengkapan atau perkhidmatan yang anda perlukan. Sertakan: jenis hos (R1AT/R2AT/4SP), saiz, jenis kelengkapan (BSP/JIS/ORFS), kuantiti dan butiran lain.",
    send: "Hantar melalui WhatsApp →",
  },
} as Record<string, { title: string; desc: string; yourName: string; phone: string; email: string; equipment: string; whatNeed: string; textareaPlaceholder: string; send: string }>;

export function QuoteForm({ locale = "en" }: { locale?: string }) {
  const L = copy[locale] ?? copy.en;

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
      <h2 className="font-display text-2xl font-bold text-primary mb-1">{L.title}</h2>
      <p className="text-sm text-steel/60 mb-6">{L.desc}</p>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-steel mb-1.5" htmlFor="name">
              {L.yourName}
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
              {L.phone}
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
            {L.email}
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
            {L.equipment}
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
            {L.whatNeed}
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows={4}
            required
            placeholder={L.textareaPlaceholder}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-7 py-3.5 font-semibold text-white hover:bg-accent-dark transition-colors"
        >
          {L.send}
        </button>
      </form>
    </div>
  );
}
