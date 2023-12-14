import { getOverriddenSection } from "@faststore/core";

const OverrideBreadcrumb = getOverriddenSection({
  section: "Breadcrumb",
});

export default function CustomBreadcrumb(
  props: React.ComponentProps<typeof OverrideBreadcrumb>
) {
  return <OverrideBreadcrumb {...props} alt={`Custom: ${props.alt}`} />;
}
