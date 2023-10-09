import { gql } from "@faststore/core/api";

export const fragment = gql`
  fragment ClientShippingSimulation on Query {
    shipping(items: $items, postalCode: $postalCode, country: $country) {
      address {
        city
        state
        number
      }
    }
  }
`;
