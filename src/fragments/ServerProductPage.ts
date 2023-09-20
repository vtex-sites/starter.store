import { gql } from "@faststore/core/api";

export const fragment = gql`
  fragment ServerProductPage on Query {
    extraData {
      data
    }
    namedExtraData(name: "Hello") {
      data
    }
    product(locator: $locator) {
      customData
    }
  }
`;
