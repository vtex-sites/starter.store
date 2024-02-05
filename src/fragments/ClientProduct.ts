import { gql } from '@faststore/core/api'
 
export const fragment = gql(`
  fragment ClientProduct on Query {
    product(locator: $locator) {
      galleryImages: image(context: "gallery", limit: 3) {
        url
        alternateName
      }
    }
  }
`)
