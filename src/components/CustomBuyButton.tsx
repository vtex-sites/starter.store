import { Button as UIButton } from "@faststore/ui";
import { usePDP } from "@faststore/core";
/** It's possible to import experimental functions, hooks & components from this namespace */
import { useSession_unstable as useSession } from "@faststore/core/experimental";

export function CustomBuyButton(_) {
  const context = usePDP();
  const { country } = useSession();
  console.log("🚀 ~ CustomBuyButton context:", context);

  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert("Hello User!");
      }}
    >
      {context?.data?.product.customData} {" - "} {country}
    </UIButton>
  );
}
