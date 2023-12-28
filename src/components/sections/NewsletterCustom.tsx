import { getOverriddenSection } from "@faststore/core";

const NewsletterCustom = getOverriddenSection({
  section: "Newsletter",
  components: {
    HeaderIcon: {
      Component: () => (
        <img src="https://picsum.photos/32/32.webp" alt="random image" />
      ),
    },
  },
});

export default NewsletterCustom;
