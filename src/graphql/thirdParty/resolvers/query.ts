export type ProductsExtraData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: number;
  };
};

export type ExtraDataRoot = {
  data?: ProductsExtraData[];
};

async function getProductsFromThirdPartyApi() {
  const result = await fetch("https://fakestoreapi.com/products");
  const json = result.json();
  return json;
}

export const Query = {
  extraData: async (): Promise<{ data: ProductsExtraData[] }> => {
    const products: ProductsExtraData[] = await getProductsFromThirdPartyApi();

    return {
      data: products,
    };
  },
  namedExtraData: (_: unknown, { name }: { name: string }) => {
    return {
      data: `Named extra data: ${name}`,
    };
  },
};
