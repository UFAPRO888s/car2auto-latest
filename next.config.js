/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
    contentSecurityPolicy:
      "default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline'; frame-ancestors 'none';",
    domains: [
      'archive.car2autobuy.com',
      'car2autobuy.com',
      'fastly-production.24c.in',
      'firebasestorage.googleapis.com',
    ],
  },
}

module.exports = nextConfig
