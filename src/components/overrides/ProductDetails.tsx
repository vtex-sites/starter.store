import { Price as CustomPrice } from "../Price";
import { SectionOverride } from "./types";

const SECTION = "ProductDetails" as const;

const overrides: SectionOverride[typeof SECTION] = {
  name: SECTION,
  components: {
    Price: CustomPrice,
  },
};

export default overrides;