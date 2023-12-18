/** @type {import('next').NextConfig} */

const repo = "camp-ac";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true, path: "/camp-ac" },
  basePath: basePath,
};

module.exports = nextConfig;
