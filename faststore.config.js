module.exports = {
  account: "storeframework",
  theme: "soft-blue",
  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/apple-magic-mouse/p",
      collection: "/office",
    },
  },
  // E2E CI
  cypress: {
    pages: {
      home: "/",
      pdp: "/apple-magic-mouse/p",
      collection: "/office",
      collection_filtered:
        "/office/?category-1=office&marca=acer&facets=category-1%2Cmarca",
      search: "/s?q=orange",
    },
  },
};
