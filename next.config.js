/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true, path: "/camp-ac" },
  basePath: "/camp-ac",
};

module.exports = nextConfig;
