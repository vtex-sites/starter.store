import { ProductDetailsSection, getOverriddenSection } from "@faststore/core";
import { CustomBuyButton } from "../CustomBuyButton";
import { CustomShippingSimulation } from "../CustomShippingSimulation";

const ProductDetails = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
    BuyButton: { Component: CustomBuyButton },
    __experimentalShippingSimulation: { Component: CustomShippingSimulation },
  },
});

export default ProductDetails;
