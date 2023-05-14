/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        esmExternals: 'loose'
    }
}

module.exports = nextConfig