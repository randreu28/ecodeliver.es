/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.VERCEL_URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
};

module.exports = config;
//https://github.com/iamvishnusankar/next-sitemap
