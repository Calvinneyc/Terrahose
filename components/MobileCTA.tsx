import Link from "next/link";
import { site, waDefault, telLink } from "@/lib/site";
import { Icon } from "./Icon";

/**
 * 移动端底部固定 CTA — 工业风三键
 * 客户现场拿手机搜索时，无需滚回顶部
 */
export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="grid grid-cols-3 border-t border-white/10 bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <a
          href={telLink}
          className="flex flex-col items-center gap-0.5 py-2.5 text-white/85 hover:bg-white/5 transition-colors"
        >
          <Icon name="phone" className="w-5 h-5" />
          <span className="text-[11px] font-medium tracking-wide">Call</span>
        </a>
        <a
          href={waDefault}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-2.5 bg-accent text-white"
        >
          <Icon name="whatsapp" className="w-5 h-5" />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>
        <Link
          href="/request-quote"
          className="flex flex-col items-center gap-0.5 py-2.5 text-white/85 hover:bg-white/5 transition-colors"
        >
          <Icon name="quote" className="w-5 h-5" />
          <span className="text-[11px] font-medium tracking-wide">Quote</span>
        </Link>
      </div>
    </div>
  );
}
