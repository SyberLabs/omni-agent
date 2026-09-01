import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Playwright is the TEST adapter only; keep it out of the server bundle.
  serverExternalPackages: ["playwright", "playwright-core"],
};

export default nextConfig;
