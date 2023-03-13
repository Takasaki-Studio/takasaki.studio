/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
  experimental: {
    runtime: "edge"
  }
};

module.exports = nextConfig;
