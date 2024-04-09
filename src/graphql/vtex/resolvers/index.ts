import { default as StoreCollectionResolver } from "./collection";
import { default as StoreProductResolver } from "./product";

const resolvers = {
  ...StoreProductResolver,
  ...StoreCollectionResolver,
};

export default resolvers;
