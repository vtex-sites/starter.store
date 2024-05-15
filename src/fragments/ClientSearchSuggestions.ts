import { gql } from "@faststore/core/api";

export const fragment = gql(`
  fragment ClientSearchSuggestions on Query {
    search(first: 5, term: $term, selectedFacets: $selectedFacets) {
      suggestions {
        terms {
          value
        }
      }
    }
  }
`);
