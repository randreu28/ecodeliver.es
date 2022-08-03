/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : process.env.VERCEL_URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
};

module.exports = config;
//https://github.com/iamvishnusankar/next-sitemap
