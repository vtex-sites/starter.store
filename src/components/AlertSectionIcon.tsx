import { getOverriddenSection } from "@faststore/core";
import { Icon as UIIcon } from "@faststore/ui";

const AlertSectionIcon = getOverriddenSection({
  section: "Alert",
  components: {
    // only this one will have truck icon
    Alert: { props: { icon: <UIIcon name="Truck" /> } },
  },
});

export default AlertSectionIcon;
