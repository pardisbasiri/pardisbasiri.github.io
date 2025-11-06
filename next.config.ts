import type { NextConfig } from "next";

const repo = "pardis-portfolio"; // ← change to your repo name (e.g., "pardis-portfolio")
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",           // generates static ./out
  images: { unoptimized: true }, // needed for GitHub Pages
  trailingSlash: true, 
  //basePath: isProd ? `/${repo}` : undefined,
  //assetPrefix: isProd ? `/${repo}/` : undefined,
};

export default nextConfig;
