import { gql } from "@faststore/core/api";

export const fragment = gql`
  fragment ClientProduct on Query {
    product(locator: $locator) {
      customData
    }
  }
`;
