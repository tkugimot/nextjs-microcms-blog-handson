/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'ja'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
