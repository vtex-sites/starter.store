import { ExtraDataRoot } from "./query";

export const ExtraData = {
  data: (root: ExtraDataRoot) => root.data,
  customFieldFromRoot: (root: ExtraDataRoot) => root?.data?.[0]?.image ?? "",
  customField: async (_: ExtraDataRoot) => {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const customField = await res.json();
    return (customField?.[0]?.title as string) ?? "";
  },
};
