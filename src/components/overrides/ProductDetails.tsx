import { SectionOverride } from "@faststore/core";

const SECTION = "ProductDetails" as const;

const override: SectionOverride = {
  section: SECTION,
  // components: {
  //   ProductPrice: {
  //     Component: () => <></>,
  //   },
  // },
};

export { override };
