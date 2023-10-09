import { gql } from "@faststore/core/api";

export const fragment = gql`
  fragment ClientManyProducts on Query {
    search(
      first: $first
      after: $after
      sort: $sort
      term: $term
      selectedFacets: $selectedFacets
    ) {
      products {
        pageInfo {
          totalCount
        }
        edges {
          node {
            customData
          }
        }
      }
    }
  }
`;
