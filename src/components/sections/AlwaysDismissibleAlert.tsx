import { getOverriddenSection } from "@faststore/core";

/**
 * This is an alert override that's always dismissible.
 *
 * Changes the CMS schema to remove the dismissible option
 * Manually provide the value of the dismissible props by creating a component that wraps the override
 */
const OverriddenAlert = getOverriddenSection({
  section: "Alert",
});

export default function AlwaysDismissibleAlert(
  props: Omit<React.ComponentProps<typeof OverriddenAlert>, "dismissible">
) {
  return <OverriddenAlert {...props} dismissible={true} />;
}
