import type { StoreProductRoot } from "@faststore/core/api";

const productResolver = {
  StoreProduct: {
    customData: (root: StoreProductRoot) => {
      console.log("🚀 ~ root:", JSON.stringify(root, null, 2));
      return "My item id: " + root.itemId;
    },
  },
};

export default productResolver;
