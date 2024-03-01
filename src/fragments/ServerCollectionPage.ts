import { gql } from "@faststore/core/api";

export const fragment = gql(`
  fragment ServerCollectionPage on Query {
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
    collection(slug: $slug) {
      id
    }
  }
`);
