// next-sitemap.config.js

module.exports = {
  siteUrl: "https://albaniagateway.com", // Replace with your site's URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/login"],
  autoLastmod: true, // Automatically set lastmod
  // Optional: custom transform function to modify the generated sitemap
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/blog")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/explore-cities")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/visit-albania")) {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path, // Path of the URL
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
