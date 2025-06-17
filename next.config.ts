import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip all ESLint checks during builds
  },
};

export default nextConfig;
