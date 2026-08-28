"use client";

import Image from "next/image";
import { useState } from "react";
import { waLink } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "./Icon";

export interface GalleryImage {
  src: string;
  alt: string;
  wa: string;
}

/**
 * ProductGallery — 点击查看大图（lightbox），灯箱内再提供 WhatsApp 询价入口
 */
export function ProductGallery({
  images,
  locale = "en",
}: {
  images: GalleryImage[];
  locale?: string;
}) {
  const [open, setOpen] = useState<GalleryImage | null>(null);
  const t = getDictionary(locale);
  const enquire = t.ui.common.enquireWhatsApp;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(img)}
            className="group relative cursor-zoom-in overflow-hidden rounded-lg shadow-card"
            aria-label={`${t.gallery.title}: ${img.alt}`}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-8"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex max-h-full w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={open.src}
              alt={open.alt}
              className="max-h-[68vh] w-auto max-w-full rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-sm text-white/75">{open.alt}</p>
            <a
              href={waLink(
                `Hi Terra Hose, I'd like to enquire about this product (${open.wa}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {enquire}
            </a>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold leading-none text-primary shadow-lg hover:bg-gray-100"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
