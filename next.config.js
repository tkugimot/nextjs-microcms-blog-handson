/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    cpus: 6,
  },
}

module.exports = nextConfig
