// next-sitemap.config.js

module.exports = {
  siteUrl: "https://albaniagateway.com", // Replace with your site's URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/login"],
  // Optional: custom transform function to modify the generated sitemap
  transform: async (config, path) => {
    // Example: Modify the priority for the home page
    if (path === "/") {
      return {
        loc: path, // Path of the URL
        changefreq: "daily",
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
