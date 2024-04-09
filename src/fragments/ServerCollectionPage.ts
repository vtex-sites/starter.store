import { gql } from "@faststore/core/api";

export const fragment = gql`
  fragment ServerCollectionPage on Query {
    collection(slug: $slug) {
      title
      metaTagDescription
      customData
    }
  }
`;
