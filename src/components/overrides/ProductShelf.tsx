import { SectionOverride } from "@faststore/core";
import CustomCarousel from "../CustomCarousel";

const SECTION = "ProductShelf" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    // __experimentalCarousel: { Component: CustomCarousel },
    __experimentalCarousel: {
      props: { itemsPerPage: 1, infiniteMode: true, variant: "slide" },
    },
  },
};

export { override };
