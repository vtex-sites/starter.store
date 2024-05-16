import { ProductDetailsSection, getOverriddenSection } from "@faststore/core";

const ProductDetailsWithCustomProductDescription = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
    __experimentalProductDescription: {
      props: {
        initiallyExpanded: "all",
        descriptionData: [
          { title: "Description 1", content: "Some specific description" },
          { title: "Description 2", content: "Another specific description" },
        ],
      },
    },
  },
});

export default ProductDetailsWithCustomProductDescription;
