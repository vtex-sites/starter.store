import { getOverriddenSection } from "@faststore/core";
import styles from './simple-alert.module.scss'

/**
 * This is a simple alert override.
 * 
 * Changes only one prop of the Icon component, maintains the same CMS schema (defined in cms/sections.json).
 * Adds className, a way to append styles to the section component.
 */
const SimpleAlert = getOverriddenSection({
  section: "Alert",
  className: styles.simpleAlert,
  components: { Icon: { props: { weight: "bold" } } },
});

export default SimpleAlert;
