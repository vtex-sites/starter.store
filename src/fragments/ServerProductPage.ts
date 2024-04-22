import { gql } from "@faststore/core/api";

export const fragment = gql(`
  fragment ServerProductPage on Query {
    extraData {
      data {
        title
        rating {
          rate
          count
        }
      }
    }
    namedExtraData(name: "Hello") {
      data
    }
    product(locator: $locator) {
      customData
    }
  }
`);
