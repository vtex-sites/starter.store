import { SectionOverride } from "@faststore/core";
import { CustomHeader } from "../CustomHeader";

const SECTION = "Navbar" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    _experimentalButtonSignIn: { Component: CustomHeader },
  },
};

export { override };
