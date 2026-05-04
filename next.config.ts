import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
