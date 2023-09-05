import { gql } from "@faststore/graphql-utils";

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
