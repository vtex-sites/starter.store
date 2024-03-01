import {
  HeroSection,
  getOverriddenSection,
  useDynamicContent,
} from "@faststore/core";
import { ServerDynamicContentQuery } from "@faststore/core/api";

const OverridenHero = getOverriddenSection({
  Section: HeroSection,
  components: {
    HeroImage: {
      Component: () => (
        <img
          src="https://web.archive.org/web/20060709215827im_/http://www.paulgilbert.com/Lets.Drink.jpg"
          alt="Drink Green Juice!"
        />
      ),
    },
  },
});

export default function FixedImageHero(
  props: React.ComponentProps<typeof OverridenHero>
) {
  const context = useDynamicContent<ServerDynamicContentQuery>();
  console.log("🚀 ~ FixedImageHero context:", context);
  return <OverridenHero {...props} image={{ src: "noop", alt: "noop" }} />;
}
