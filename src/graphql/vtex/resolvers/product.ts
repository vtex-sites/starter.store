import type { StoreProductRoot } from "@faststore/core/api"

const productResolver = {
  StoreProduct: {
    customData: (root: StoreProductRoot) => {
      return "My item id: " + root.itemId
    },
    skuVariations: (root: StoreProductRoot) => {

      const extractImage = (item: any) => {
        return item.images.length > 0
          ? item.images[0].imageUrl
          : "default-image.jpg"
      }

      const uniqueItemIds = new Set<string>()

      const transformItem = (item: any) => {
        if (!uniqueItemIds.has(item.itemId)) {
          uniqueItemIds.add(item.itemId)
          return {
            itemId: item.itemId,
            name: item.name,
            image: extractImage(item),
          }
        }
        return null
      }

      const itemDetails = [
        transformItem(root),
        ...root.isVariantOf.items.map(transformItem),
      ].filter((item) => item !== null)


      return itemDetails
    },
  },
}

export default productResolver
