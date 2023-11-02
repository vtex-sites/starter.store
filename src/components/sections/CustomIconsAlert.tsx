import { getOverriddenSection } from "@faststore/core";

/**
 * This is an alert override with custom icon options in the CMS.
 * 
 * Changes only the CMS schema to include more options for native Icons supported by @faststore/ui.
 */
const CustomIconsAlert = getOverriddenSection({
  section: "Alert",
});

export default CustomIconsAlert;
