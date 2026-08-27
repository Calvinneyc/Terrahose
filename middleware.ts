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
  const first = pathname.split("/").filter(Boolean)[0] ?? "";

  // 已有语言前缀 → 放行
  if ((locales as readonly string[]).includes(first)) {
    return NextResponse.next();
  }

  // 无语言前缀（/, /about, /products/xxx ...）→ 重定向到对应语言
  // 根路径按 cookie/Accept-Language 推断（307，目标随用户变化）；
  // 其余统一到默认语言（308 永久，告知搜索引擎已迁移）
  if (pathname === "/") {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url), 308);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|logo.jpg|og-image.jpg|robots.txt|sitemap.xml|images).*)"],
};
