import { ProductDetailsSection, getOverriddenSection } from "@faststore/core";
import { CustomBuyButton } from "../CustomBuyButton";
// import { CustomShippingSimulation } from "../CustomShippingSimulation";
import CustomProductDetailsSetting from "../CustomProductDetailsSetting";

const ProductDetailsCustom = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
    BuyButton: { Component: CustomBuyButton },
    // __experimentalShippingSimulation: { Component: CustomShippingSimulation },
    __experimentalProductDetailsSettings: {
      Component: CustomProductDetailsSetting,
    },
  },
});

export default ProductDetailsCustom;
