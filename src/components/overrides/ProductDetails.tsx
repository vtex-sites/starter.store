import { SectionOverride } from "@faststore/core/src/typings/overrides";
import { CustomBuyButton } from "../CustomBuyButton";
import { CustomShippingSimulation } from "../CustomShippingSimulation";

const SECTION = "ProductDetails" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    BuyButton: { Component: CustomBuyButton },
    __experimentalShippingSimulation: { Component: CustomShippingSimulation },
  },
};

export { override };
