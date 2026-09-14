const UPSTASH_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const KEY = "terra:visitor_count";
const START = 1898;

// 强制动态渲染，避免被静态化缓存
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// 直接通过 Upstash REST API 调用（无第三方依赖）
async function upstash<T = string | number | null>(
  command: string,
  args: string[] = []
): Promise<T | null> {
  if (!UPSTASH_REST_URL || !UPSTASH_REST_TOKEN) return null;
  try {
    const url = `${UPSTASH_REST_URL}/${command}/${args
      .map((a) => encodeURIComponent(a))
      .join("/")}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${UPSTASH_REST_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.result as T;
  } catch {
    return null;
  }
}

// Upstash REST 返回的数值是字符串，统一转数字
function toCount(v: string | number | null | undefined): number | null {
  if (v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export async function GET() {
  const raw = await upstash<string | null>("get", [KEY]);
  const count = toCount(raw);
  return Response.json({ count: count === null ? START : count });
}

export async function POST() {
  const current = toCount(await upstash<string | null>("get", [KEY]));
  if (current === null) {
    // 首次访问：从起始值 1000 起，+1 → 1001
    const next = START + 1;
    await upstash("set", [KEY, String(next)]);
    return Response.json({ count: next });
  }
  const next = toCount(await upstash<string | null>("incr", [KEY]));
  return Response.json({ count: next === null ? START : next });
}
