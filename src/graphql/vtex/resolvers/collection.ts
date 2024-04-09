const collectionResolver = {
  StoreCollection: {
    title: (root: any) => root?.title ?? root?.Title ?? "",
    metaTagDescription: (root: any) =>
      root?.metaTagDescription ?? root?.MetaTagDescription ?? "",
    customData: (root: any) => {
      console.log("🚀 ~ root any:", JSON.stringify(root, null, 2));
      return "https://newstore.vtexassets.com/arquivos/ids/155412/airpods-3.png?v=638466438094530000";
    },
  },
};

export default collectionResolver;
