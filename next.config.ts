import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",  // Proxy all API requests
        destination: "http://localhost:8080/api/:path*",  // Backend server URL
      },
    ];
  },
};

export default nextConfig;
