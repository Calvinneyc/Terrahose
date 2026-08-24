"use client";

import { useState } from "react";
import Link from "next/link";
import { site, waDefault } from "@/lib/site";
import { Icon } from "./Icon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];
// NOTE: /technical (Sprint 4) — temporarily omitted to avoid 404

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      {/* 顶部信息条 */}
      <div className="hidden md:block bg-primary-dark text-xs text-white/70 border-b border-white/10">
        <div className="container-x flex items-center justify-between py-1.5">
          <span className="tracking-wide">{site.addressShort}</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Icon name="phone" className="w-3.5 h-3.5" />
              {site.phoneDisplay}
            </a>
            <span className="text-white/40">|</span>
            <span>{site.hours}</span>
          </div>
        </div>
      </div>

      {/* 主导航 */}
      <div className="container-x flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.jpg" alt="Terra Hose & Hydraulic Engineering" className="h-10 w-auto object-contain" />
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* 移动汉堡 */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* 移动菜单 */}
      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-primary">
          <div className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-white/90 border-b border-white/5 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mb-2 flex items-center justify-center gap-2 rounded bg-accent px-4 py-3 text-sm font-semibold"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
