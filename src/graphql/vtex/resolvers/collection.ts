import type { StoreCollectionRoot } from "@faststore/core/api";

const collectionResolver = {
  StoreCollection: {
    title: (root: StoreCollectionRoot) => root?.title ?? root?.Title ?? "",
    metaTagDescription: (root: StoreCollectionRoot) =>
      root?.metaTagDescription ?? root?.MetaTagDescription ?? "",
    customData: (root: StoreCollectionRoot) => {
      console.log(
        "🚀 ~ root StoreCollectionRoot:",
        JSON.stringify(root, null, 2)
      );
      return "https://newstore.vtexassets.com/arquivos/ids/155412/airpods-3.png?v=638466438094530000";
    },
  },
};

export default collectionResolver;
