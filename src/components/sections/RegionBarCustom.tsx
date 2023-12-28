import { getOverriddenSection } from "@faststore/core";

const RegionBarCustom = getOverriddenSection({
  section: "RegionBar",
  components: {
    LocationIcon: {
      props: { name: "Truck" },
    },
  },
});

export default RegionBarCustom;
