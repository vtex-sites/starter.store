import { gql } from "@faststore/core/api";

export const fragment = gql`
  fragment ServerCollectionPage on Query {
    extraData {
      data
    }
    namedExtraData(name: "Hello") {
      data
    }
    collection(slug: $slug) {
      id
    }
  }
`;
