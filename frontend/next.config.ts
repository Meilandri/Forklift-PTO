import type { NextConfig } from "next";

// GitHub Actions menyediakan variabel environment GITHUB_ACTIONS dengan nilai string "true"
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  // Menambahkan prefix subfolder khusus saat di-build oleh GitHub Actions
  basePath: isGithubActions ? "/Forklift-PTO" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/Forklift-PTO" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;