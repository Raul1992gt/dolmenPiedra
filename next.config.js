/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/dolmenPiedra',
  assetPrefix: '/dolmenPiedra',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 