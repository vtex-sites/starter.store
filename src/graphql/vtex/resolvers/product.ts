const productResolver = {
  StoreProduct: {
    customData: (root) => {
      return 'My item id: ' + root.itemId
    },
  },
}

export default productResolver
