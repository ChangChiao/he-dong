import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qr-official.line.me",
      },
    ],
  },
  async redirects() {
    return [
      // 無 www → 有 www（一律導到 https），301 永久轉址
      {
        source: "/:path*",
        has: [{ type: "host", value: "hedong888.com" }],
        destination: "https://www.hedong888.com/:path*",
        permanent: true,
      },
      // http → https（已是 www 但仍走 http 的情況）
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.hedong888.com" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://www.hedong888.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
