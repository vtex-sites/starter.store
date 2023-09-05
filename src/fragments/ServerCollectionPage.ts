import { gql } from '@faststore/graphql-utils'

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
`
