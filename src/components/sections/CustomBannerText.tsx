import { getOverriddenSection } from "@faststore/core";

const OverriddenBannerText = getOverriddenSection({
  section: "BannerText",
  components: {
    BannerText: { props: { variant: "secondary" } },
  },
});

export default function CustomBannerText(
  props: React.ComponentProps<typeof OverriddenBannerText>
) {
  return <OverriddenBannerText {...props} title={`Custom: ${props.title}!`} />;
}
