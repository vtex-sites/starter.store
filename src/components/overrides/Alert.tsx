import { SectionOverride } from "@faststore/core";
import CustomAlert from "../CustomAlert";
import { Icon as UIIcon } from "@faststore/ui";

// Override v1

const SECTION = "Alert" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    Alert: {
      props: {
        icon: <UIIcon name="Checked" />,
        // "aria-checked": true,
      },
    },
    // Alert: { Component: CustomAlert },
  },
};

export { override };
