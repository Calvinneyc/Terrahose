import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 修正 workspace root 检测（workspace 根目录有无关的 package.json）
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
