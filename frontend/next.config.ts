import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  // Menambahkan prefix subfolder khusus untuk deployment GitHub Pages
  basePath: isGithubActions ? "/Forklift-PTO" : "",
  assetPrefix: isGithubActions ? "/Forklift-PTO/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;