import { SectionOverride } from "@faststore/core";

const SECTION = "Navbar" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    // _experimentalButtonSignIn: { Component: CustomHeader },
  },
};

export { override };
