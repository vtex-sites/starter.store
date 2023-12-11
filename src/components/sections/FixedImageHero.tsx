import { getOverriddenSection } from "@faststore/core";

/**
 * This is an alert override that's always dismissible.
 *
 * Changes the CMS schema to remove the dismissible option
 * Manually provide the value of the dismissible props by creating a component that wraps the override
 */
const OverridenHero = getOverriddenSection({
  section: "Hero",
  components: {
    HeroImage: {
      Component: () => <img src="https://web.archive.org/web/20060709215827im_/http://www.paulgilbert.com/Lets.Drink.jpg" alt="Drink Green Juice!"  />
    }
  }
});

export default function FixedImageHero(props: React.ComponentProps<typeof OverridenHero>) {
  return <OverridenHero {...props} image={{src: 'noop', alt: 'noop'}} />;
}
