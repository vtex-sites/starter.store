import { getOverriddenSection } from "@faststore/core";
import styles from "./productCard.module.scss";

const ProductGalleryCustom = getOverriddenSection({
  section: "ProductGallery",
  components: {
    __experimentalProductCard: {
      Component: () => AwesomeProductCard,
    },
  },
});

export default ProductGalleryCustom;

const AwesomeProductCard = (
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
    <button>Add to cart</button>
  </div>
);
