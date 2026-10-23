import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

function getLocale(request: NextRequest): Locale {
  // 1. cookie 优先（回访用户保留语言选择）
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }
  // 2. 默认英文（不再按浏览器 Accept-Language 自动跳转）
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
  // 根路径按 cookie 推断，无 cookie 时默认英文（307）；
  // 其余统一到默认语言（308 永久，告知搜索引擎已迁移）
  if (pathname === "/") {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url), 308);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|logo.jpg|logo.svg|og-image.jpg|og-image.svg|robots.txt|sitemap.xml|images).*)"],
};
