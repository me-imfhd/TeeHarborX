/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@interlinked/api","@interlinked/ui", "@interlinked/utils","@interlinked/db", "@interlinked/shadcn", "@interlinked/auth"],
};

module.exports = nextConfig;
