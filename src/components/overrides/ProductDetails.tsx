import { SectionOverride } from "@faststore/core/src/typings/overrides";
import { CustomBuyButton } from "../CustomBuyButton/CustomBuyButton";

const SECTION = "ProductDetails";

const override: SectionOverride = {
  section: SECTION,
  components: {
    BuyButton: { Component: CustomBuyButton },
  },
};

export { override };
