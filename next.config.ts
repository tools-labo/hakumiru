import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/hakumiru" : "",
  assetPrefix: isGithubPages ? "/hakumiru/" : "",
};

export default nextConfig;
