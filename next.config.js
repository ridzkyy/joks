/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages compatibility
  basePath: '/web_joks',
  assetPrefix: '/web_joks/',
}

module.exports = nextConfig