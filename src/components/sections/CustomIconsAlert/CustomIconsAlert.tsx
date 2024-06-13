"use client";

import { AlertSection, getOverriddenSection } from "@faststore/core";

import styles from "./custom-icons-alert.module.scss";

/**
 * This is an Alert Section override with custom icon options in the Headless CMS.
 *
 * We'll change the schema to include more options for native Icons supported by @faststore/ui.  (Changes added to sections.json)
 */
const CustomIconsAlert = getOverriddenSection({
  Section: AlertSection, // The native section to be overridden (Alert)
  className: styles.customIconsAlert,
});

export default CustomIconsAlert;
