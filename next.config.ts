import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
};
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
export default nextConfig;
