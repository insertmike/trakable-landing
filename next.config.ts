import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/trakable/" : "",
  basePath: isProd ? "/trakable" : "",
  output: "export",
};

export default nextConfig;
