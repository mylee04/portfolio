import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // GitHub Actions가 자동으로 basePath를 설정하므로 수동으로 추가할 필요 없음
};

export default nextConfig;
