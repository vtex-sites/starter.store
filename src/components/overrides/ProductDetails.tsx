import { SectionOverride } from "@faststore/core/src/typings/overrides";

const SECTION = "ProductDetails";

const override: SectionOverride = {
  section: SECTION,
  components: {
    BuyButton: { props: { size: "small", iconPosition: "left" } },
  },
};

export { override };
