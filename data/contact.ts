import { site, waDefault, telLink } from "@/lib/site";

export interface QuickAction {
  label: string;
  sublabel: string;
  href: string;
  icon: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface ContactContent {
  quickActions: QuickAction[];
  formFields: ContactFormField[];
}

export const contact = {
  company: site.name,
  tagline: "Hydraulic Hose Assembly & Fitting Engineering",

  address: site.address,
  phone: site.phoneDisplay,
  whatsapp: site.phone,
  whatsappLink: waDefault,
  email: site.email,
  hours: site.hours,

  localized: {
    en: {
      quickActions: [
        {
          label: "WhatsApp Us",
          sublabel: "Fastest response",
          href: waDefault,
          icon: "whatsapp",
        },
        {
          label: site.phoneDisplay,
          sublabel: "Call us directly",
          href: telLink,
          icon: "phone",
        },
        {
          label: "Visit Workshop",
          sublabel: site.addressShort,
          href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
          icon: "location",
        },
      ],
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
    },
    zh: {
      quickActions: [
        {
          label: "WhatsApp 咨询",
          sublabel: "响应最快",
          href: waDefault,
          icon: "whatsapp",
        },
        {
          label: site.phoneDisplay,
          sublabel: "直接致电",
          href: telLink,
          icon: "phone",
        },
        {
          label: "到访车间",
          sublabel: site.addressShort,
          href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
          icon: "location",
        },
      ],
      formFields: [
        { name: "name", label: "您的姓名", type: "text", required: true },
        { name: "company", label: "公司（选填）", type: "text", required: false },
        { name: "phone", label: "电话 / WhatsApp", type: "tel", required: true },
        { name: "email", label: "邮箱（选填）", type: "email", required: false },
        {
          name: "enquiry_type",
          label: "您需要什么？",
          type: "select",
          required: true,
          options: [
            "软管总成（我有规格）",
            "软管识别（我需要帮助识别零件）",
            "软管更换 / 维修",
            "定制软管总成",
            "产品咨询（库存查询）",
            "其他",
          ],
        },
        {
          name: "message",
          label: "描述您的需求",
          type: "textarea",
          required: true,
          placeholder: "请注明软管尺寸（如 1/2 英寸）、长度、接头类型、设备型号，或直接通过 WhatsApp 附上照片。",
        },
      ],
    },
    ms: {
      quickActions: [
        {
          label: "WhatsApp Kami",
          sublabel: "Respons paling pantas",
          href: waDefault,
          icon: "whatsapp",
        },
        {
          label: site.phoneDisplay,
          sublabel: "Hubungi terus",
          href: telLink,
          icon: "phone",
        },
        {
          label: "Lawati Bengkel",
          sublabel: site.addressShort,
          href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
          icon: "location",
        },
      ],
      formFields: [
        { name: "name", label: "Nama Anda", type: "text", required: true },
        { name: "company", label: "Syarikat (Pilihan)", type: "text", required: false },
        { name: "phone", label: "Telefon / WhatsApp", type: "tel", required: true },
        { name: "email", label: "E-mel (Pilihan)", type: "email", required: false },
        {
          name: "enquiry_type",
          label: "Apa yang anda perlukan?",
          type: "select",
          required: true,
          options: [
            "Pemasangan Hos (saya ada spesifikasi)",
            "Pengenalpastian Hos (saya perlukan bantuan)",
            "Penggantian / Pembaikan Hos",
            "Pemasangan Hos Tersuai",
            "Pertanyaan Produk (semakan stok)",
            "Lain-lain",
          ],
        },
        {
          name: "message",
          label: "Terangkan keperluan anda",
          type: "textarea",
          required: true,
          placeholder:
            "Sertakan saiz hos (cth. 1/2 inci), panjang, jenis kelengkapan, model peralatan, atau lampirkan foto melalui WhatsApp.",
        },
      ],
    },
  } as Record<string, ContactContent>,
};
