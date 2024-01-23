import { getOverriddenSection } from "@faststore/core";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./productCard.module.scss";

const AwesomeProductCard = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const incrementCounterAndReload = () => {
    setCount(count + 1);
    router.reload();
  };
  return (
    <div className={styles["product-card"]}>
      <img
        className={styles["product-image"]}
        src="https://fastly.picsum.photos/id/1/150/150.jpg?hmac=OvniWg6i7GUNxvoCkWx3L3-niYwa0gi21dp1D51zwwc"
        width={150}
        height={150}
        alt="product name"
      />
      <h2 className={styles["product-title"]}>My awesome product</h2>
      <p className={styles["product-price"]}>R$ 99,99</p>
      <button onClick={incrementCounterAndReload}>Click Counter {count}</button>
    </div>
  );
};

const ProductGalleryCustom = getOverriddenSection({
  section: "ProductGallery",
  components: {
    __experimentalProductCard: {
      Component: AwesomeProductCard,
    },
  },
});

export default ProductGalleryCustom;
