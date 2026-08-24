"use client";

import { Icon } from "./Icon";
import { contact } from "@/data/contact";
import { useState } from "react";

const iconMap: Record<string, string> = {
  whatsapp: "whatsapp",
  phone: "phone",
  location: "construction",
};

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    enquiry_type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 未来：这里接入后端 API 或直接转 WhatsApp
    // 目前：显示提交成功提示
    setSubmitted(true);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f0f2f5] border-b border-gray-200">
        <div className="container-x py-3">
          <nav className="flex items-center gap-2 text-xs text-steel/60">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span className="text-steel/40">Contact</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-primary py-14 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="tag-chip mb-4">Contact Us</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-white/70">
              WhatsApp is the fastest way to reach us. Fill in the form or message us directly.
            </p>
          </div>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* QUICK ACTIONS */}
          <div className="space-y-5">
            <h2 className="font-display text-xl font-bold text-primary">Quick Contact</h2>
            {contact.quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon name={action.icon as any} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{action.label}</div>
                  <div className="text-xs text-steel/60 mt-0.5">{action.sublabel}</div>
                </div>
              </a>
            ))}

            <div className="rounded-xl border border-gray-100 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-primary mb-3">Workshop Hours</h3>
              <p className="text-sm text-steel/80">{contact.hours}</p>
              <p className="mt-2 text-xs text-steel/60">Walk-ins welcome during business hours.</p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold text-primary mb-1">Send an Enquiry</h2>
              <p className="text-sm text-steel/60 mb-7">
                Or message us directly on{" "}
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  WhatsApp
                </a>{" "}
                — usually faster.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-display text-lg font-bold text-green-800 mb-2">Enquiry Received!</h3>
                  <p className="text-sm text-green-700">
                    We&apos;ll get back to you within 1 business day. For faster service, WhatsApp us directly.
                  </p>
                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent-dark transition-colors"
                  >
                    <Icon name="whatsapp" className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-steel/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Lee Construction Co."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-steel/70 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="(Optional)"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-steel/70 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="+60 12-345 6789"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-steel/70 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="(Optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-steel/70 mb-1.5">
                      What do you need? *
                    </label>
                    <select
                      required
                      value={form.enquiry_type}
                      onChange={(e) => setForm({ ...form, enquiry_type: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select an option...</option>
                      {(contact.formFields[4]?.options ?? []).map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-steel/70 mb-1.5">
                      Describe your requirement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="e.g. 1/2 inch hydraulic hose, 2m long, BSP fittings both ends, for excavator CAT 320"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 rounded bg-accent px-7 py-3 font-semibold hover:bg-accent-dark transition-colors"
                    >
                      Submit Enquiry
                    </button>
                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded border border-gray-200 px-7 py-3 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Icon name="whatsapp" className="w-5 h-5" />
                      Faster: WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
