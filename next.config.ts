/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
      bodySizeLimit: '2mb'
    }
  },
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3009'
  }
}

module.exports = nextConfig