/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = "camp-ac";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "https://renocrypt.github.io/camp-ac",
  },
  basePath: basePath,
};

module.exports = nextConfig;
