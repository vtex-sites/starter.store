import { useShippingSimulation_unstable } from "@faststore/core/experimental";
import { ShippingSimulation } from "@faststore/ui";

export function CustomShippingSimulation(props: any) {
  const {
    productShippingInfo,
    formatter,
    inputLabel,
    title,
    idkPostalCodeLinkProps,
    ...otherProps
  } = props;

  const {
    input,
    shippingSimulation,
    handleSubmit,
    handleOnInput,
    handleOnClear,
  } = useShippingSimulation_unstable(productShippingInfo);

  const { postalCode, displayClearButton, errorMessage } = input;

  const location =
    [
      shippingSimulation?.address?.neighborhood,
      shippingSimulation?.address?.city,
    ]
      .filter(Boolean)
      .join(" / ") ?? "";

  const options = shippingSimulation?.logisticsInfo?.[0]?.slas ?? [];

  return (
    <ShippingSimulation
      formatter={formatter}
      onInput={handleOnInput}
      onSubmit={handleSubmit}
      onClear={handleOnClear}
      location={`${location}, ${shippingSimulation?.address?.state}`}
      options={options}
      address={shippingSimulation?.address}
      displayClearButton={displayClearButton}
      errorMessage={errorMessage}
      postalCode={postalCode}
      inputLabel={inputLabel}
      title={title}
      idkPostalCodeLinkProps={idkPostalCodeLinkProps}
      {...otherProps}
    />
  );
}
