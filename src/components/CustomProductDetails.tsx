import { getOverriddenSection, ProductDetailsSection, usePDP } from "@faststore/core";

const OverrideProductDetails = getOverriddenSection({
  Section: ProductDetailsSection,
});

function CustomProductDetails(
  props: React.ComponentProps<typeof OverrideProductDetails>
) {
  const context = usePDP()
  const { product: { additionalProperty } } = context?.data ?? {}
  console.log("AdditionalProperty: ", additionalProperty);
  return <OverrideProductDetails {...props} />;
}

export { CustomProductDetails };
