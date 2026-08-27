import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

function getLocale(request: NextRequest): Locale {
  // 1. cookie 优先
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }
  // 2. Accept-Language 推断
  const al = request.headers.get("accept-language") || "";
  if (/^zh/i.test(al)) return "zh";
  if (/^(ms|id)/i.test(al)) return "ms";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 仅处理根路径：重定向到对应语言首页
  if (pathname === "/") {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
