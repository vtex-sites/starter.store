module.exports = {
  seo: {
    title: "FastStore Starter",
    description: "Fast Demo Store",
    titleTemplate: "%s | FastStore",
    author: "FastStore",
  },
  theme: "custom-theme",
  platform: "vtex",
  api: {
    storeId: "storeframework",
    workspace: "master",
    environment: "vtexcommercestable",
    hideUnavailableItems: false,
    incrementAddress: false,
  },
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":"1","regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },
  cart: {
    id: "",
    items: [],
    messages: [],
    shouldSplitItem: true,
  },
  storeUrl: "https://www.vtexfaststore.com",
  secureSubdomain: "https://secure.vtexfaststore.com",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",
  previewRedirects: {
    home: "/",
    plp: "/office",
    search: "/s?q=headphone",
    pdp: "/apple-magic-mouse/p",
  },
  lighthouse: {
    server: "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/4k-philips-monitor-99988213/p",
      collection: "/office",
    },
  },
  cypress: {
    pages: {
      home: "/",
      pdp: "/4k-philips-monitor-99988213/p",
      collection: "/office",
      collection_2: "/technology",
      collection_filtered:
        "/office/?category-1=office&marca=acer&facets=category-1%2Cmarca",
      search: "/s?q=orange",
    },
  },
  analytics: {
    gtmContainerId: "GTM-PGHZ95N",
  },
  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },
  account: "storeframework",
  vtexHeadlessCms: {
    webhookUrls: [
      "https://storeframework.myvtex.com/cms-releases/webhook-releases",
    ],
  },
};
