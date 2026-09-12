import { Redis } from "@upstash/redis";

const KEY = "terra:visitor_count";
const START = 1000;

// 强制动态渲染，避免被静态化缓存
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// 延迟初始化：未配置 Upstash Redis 环境变量时返回 null（降级为起始值）
function getRedis(): Redis | null {
  try {
    return Redis.fromEnv();
  } catch {
    return null;
  }
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return Response.json({ count: START });
  try {
    const count = await redis.get<number>(KEY);
    return Response.json({ count: count ?? START });
  } catch {
    return Response.json({ count: START });
  }
}

export async function POST() {
  const redis = getRedis();
  if (!redis) return Response.json({ count: START });
  try {
    const current = await redis.get<number>(KEY);
    if (current === null) {
      // 首次访问：从起始值 1000 起，+1 → 1001
      const next = START + 1;
      await redis.set(KEY, next);
      return Response.json({ count: next });
    }
    const next = await redis.incr(KEY);
    return Response.json({ count: next });
  } catch {
    return Response.json({ count: START });
  }
}
