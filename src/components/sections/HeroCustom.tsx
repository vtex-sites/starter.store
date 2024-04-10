import { HeroSection, getOverriddenSection, usePLP } from "@faststore/core";

const OverridenHero = getOverriddenSection({
  Section: HeroSection,
});

export default function HeroCustom(
  props: React.ComponentProps<typeof OverridenHero>
) {
  const { title, subtitle, image, ...otherProps } = props;
  const context = usePLP();
  return (
    <OverridenHero
      title={context?.data?.collection?.title}
      subtitle={context?.data?.collection?.metaTagDescription}
      image={{
        src: context?.data?.collection?.customData,
        alt: "Headphones",
      }}
      variant={props.variant ?? "primary"}
      colorVariant={props.colorVariant ?? "light"}
    />
  );
}
