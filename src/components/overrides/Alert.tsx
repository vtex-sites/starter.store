import { SectionOverride } from "@faststore/core";

const SECTION = "Alert" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    // This override should still work
    Icon: { props: { "aria-checked": true } },
  },
};

export { override };
