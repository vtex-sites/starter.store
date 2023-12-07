import { SectionOverride } from "@faststore/core";

const SECTION = "ProductGallery" as const;

const override: SectionOverride = {
  section: SECTION,
  components: { __experimentalEmptyGallery: { Component: () => <>Empty</> } },
};

export { override };
