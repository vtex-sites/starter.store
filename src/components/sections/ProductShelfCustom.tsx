import { getOverriddenSection } from "@faststore/core";

const ProductShelfCustom = getOverriddenSection({
  section: "ProductShelf",
  components: {
    __experimentalProductCard: {
      props: { onButtonClick: () => window.alert("Welcome to overrides 2.0!") },
    },
  },
});

export default ProductShelfCustom;
