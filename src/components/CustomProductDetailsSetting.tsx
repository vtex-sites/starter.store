import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { useMemo } from "react";

import type { ProductDetailsFragment_ProductFragment } from "@faststore/core/api";

import {
  Selectors_unstable as Selectors,
  useBuyButton_unstable as useBuyButton,
  useFormattedPrice_unstable as useFormattedPrice,
} from "@faststore/core/experimental";

import {
  Button,
  BuyButton,
  Icon,
  ProductPrice,
  QuantitySelector,
} from "@faststore/ui";

function NotAvailableButton({ children }: PropsWithChildren) {
  return (
    <Button variant="primary" disabled data-fs-buy-button>
      {children}
    </Button>
  );
}

interface ProductDetailsSettingsProps {
  product: ProductDetailsFragment_ProductFragment;
  buyButtonTitle: string;
  buyButtonIcon: {
    alt: string;
    icon: string;
  };
  isValidating: boolean;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  notAvailableButtonTitle: string;
  useUnitMultiplier: boolean;
}

function CustomProductDetailsSetting({
  product,
  buyButtonTitle,
  isValidating,
  quantity,
  setQuantity,
  buyButtonIcon: { icon: buyButtonIconName, alt: buyButtonIconAlt },
  notAvailableButtonTitle,
  useUnitMultiplier,
}: ProductDetailsSettingsProps) {
  const {
    id,
    sku,
    gtin,
    unitMultiplier,
    name: variantName,
    brand,
    isVariantOf,
    isVariantOf: { skuVariants },
    image: productImages,
    additionalProperty,
    offers: {
      offers: [{ availability, price, listPrice, seller }],
    },
  } = product;
  console.log("🚀 ~ product:", product);

  const buyProps = useBuyButton({
    id,
    price,
    listPrice,
    seller,
    quantity,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
      additionalProperty,
      unitMultiplier,
    },
  });

  console.log("🚀 ~ buyProps:", buyProps);
  const outOfStock = useMemo(
    () => availability === "https://schema.org/OutOfStock",
    [availability]
  );
  console.log("🚀 ~ outOfStock:", outOfStock);

  const AddToCartButton = () => {
    return outOfStock ? (
      // TODO: Adds <OutOfStock /> when component is ready to use
      <NotAvailableButton>{notAvailableButtonTitle}</NotAvailableButton>
    ) : (
      <BuyButton
        icon={<Icon name={buyButtonIconName} aria-label={buyButtonIconAlt} />}
        {...buyProps}
      >
        {buyButtonTitle || "Add to Cart"}
      </BuyButton>
    );
  };

  return (
    <>
      {!outOfStock && (
        <section data-fs-product-details-values>
          <ProductPrice
            data-fs-product-details-prices
            value={price}
            listPrice={listPrice}
            formatter={useFormattedPrice}
          />
        </section>
      )}
      {!outOfStock ? <p>In Stock</p> : <p>Out of Stock</p>}
      {skuVariants && (
        <Selectors
          slugsMap={skuVariants.slugsMap}
          availableVariations={skuVariants.availableVariations}
          activeVariations={skuVariants.activeVariations}
          data-fs-product-details-selectors
        />
      )}
      {!outOfStock && (
        <QuantitySelector
          min={1}
          max={10}
          unitMultiplier={useUnitMultiplier ? Number(unitMultiplier) : 1}
          useUnitMultiplier={useUnitMultiplier}
          onChange={setQuantity}
        />
      )}
      {isValidating ? <p>Loading...</p> : <AddToCartButton />}
    </>
  );
}

export default CustomProductDetailsSetting;
