import { getOverriddenSection } from "@faststore/core";

const CrossSellingShelfCustom = getOverriddenSection({
  section: "CrossSellingShelf",
  components: {
    __experimentalProductCard: {
      props: { onButtonClick: () => window.alert("Welcome to overrides 2.0!") },
    },
  },
});

export default CrossSellingShelfCustom;
