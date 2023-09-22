import { SectionOverride } from "@faststore/core/src/typings/overrides";
import CustomBuyButton from "../CustomBuyButton";

const SECTION = "ProductDetails" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    BuyButton: { Component: CustomBuyButton },
  },
};

export { override };
