import { getOverriddenSection } from "@faststore/core";

const ProductDetailsCustom = getOverriddenSection({
  section: "ProductDetails",
  components: {
    Price: {
      props: {
        formatter: (price: number) =>
          price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      },
    },
  },
});

export { ProductDetailsCustom };
