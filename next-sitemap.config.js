/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zubora-code.net',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://zubora-code.net/server-sitemap.xml'],
  },
  sitemapSize: 7000,
}
