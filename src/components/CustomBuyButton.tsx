import { Button as UIButton } from "@faststore/ui";
import { usePDP } from "@faststore/core";

export function CustomBuyButton(_) {
  const context = usePDP();
  console.log("🚀 ~ CustomBuyButton context:", context);

  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert("Hello User!");
      }}
    >
      {context?.data?.product.customData}
    </UIButton>
  );
}
