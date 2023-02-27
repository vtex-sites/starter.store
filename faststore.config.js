module.exports = {
  account: 'storeframework',
  theme: "custom-theme",
  seo: {
    title: "NextJSStore",
    description: "Fast Demo Store",
    titleTemplate: "%s | FastStore",
    author: "Store Framework",
  },
  platform: "vtex",
  api: {
    storeId: "storeframework",
    workspace: "master",
    environment: "vtexcommercestable",
    hideUnavailableItems: true,
  },
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":"1","regionId":""}',
    country: "USA",
    postalCode: null,
    person: null,
  },
  storeUrl: "https://vtexfaststore.com",
  secureSubdomain: "https://secure.vtexfaststore.com",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",
  lighthouse: {
    server: "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/apple-magic-mouse/p",
      collection: "/office",
    },
  },
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
  analytics: {
    gtmContainerId: "GTM-PGHZ95N",
  },
};
