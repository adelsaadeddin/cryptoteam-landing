/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js'],
  experimental: {
    styledComponents: true
  }
}

module.exports = nextConfig
