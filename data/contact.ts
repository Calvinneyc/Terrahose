import { site, waDefault, telLink } from "@/lib/site";

export const contact = {
  company: site.name,
  tagline: "Hydraulic Hose Assembly & Fitting Engineering",

  address: site.address,
  phone: site.phoneDisplay,
  whatsapp: site.phone,
  whatsappLink: waDefault,
  email: site.email,
  hours: site.hours,

  // 地图坐标（可嵌入 Google Maps）
  // lat: 1.5595,
  // lng: 103.6385,

  // 快速联系选项
  quickActions: [
    {
      label: "WhatsApp Us",
      sublabel: "Fastest response",
      href: waDefault,
      icon: "whatsapp" as const,
    },
    {
      label: site.phoneDisplay,
      sublabel: "Call us directly",
      href: telLink,
      icon: "phone" as const,
    },
    {
      label: "Visit Workshop",
      sublabel: site.addressShort,
      href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
      icon: "location" as const,
    },
  ],

  // 联系表单字段（未来接入后端）
  formFields: [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "company", label: "Company (Optional)", type: "text", required: false },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
    { name: "email", label: "Email (Optional)", type: "email", required: false },
    {
      name: "enquiry_type",
      label: "What do you need?",
      type: "select",
      required: true,
      options: [
        "Hose Assembly (I have the spec)",
        "Hose Identification (I need help identifying a part)",
        "Hose Replacement / Repair",
        "Custom Hose Assembly",
        "Product Enquiry (stock check)",
        "Other",
      ],
    },
    {
      name: "message",
      label: "Describe your requirement",
      type: "textarea",
      required: true,
      placeholder:
        "Include hose size (e.g. 1/2 inch), length, fitting types, equipment model, or attach a photo via WhatsApp instead.",
    },
  ],
};
