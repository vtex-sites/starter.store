import React from "react";
import {
  ProductThumbnail,
  ProductThumbnailImage,
  ProductThumbnailTitle,
} from "@faststore/ui";

import styles from "./productThumbnailSection.module.scss";

export interface ProductThumbnailSectionProps {}

export default function ProductThumbnailSection(
  props: ProductThumbnailSectionProps
) {
  return (
    <section className={styles.section}>
      <ProductThumbnail>
        <ProductThumbnailImage>
          <img
            src="https://storeframework.vtexassets.com/unsafe/1440x0/center/middle/https%3A%2F%2Fstoreframework.vtexassets.com%2Farquivos%2Fids%2F190903%2Funsplash-monitor.jpg%3Fv%3D637800152494200000"
            alt="Product Thumbnail"
            height={50}
            width={50}
          />
        </ProductThumbnailImage>
        <ProductThumbnailTitle>4k Philips Monitor 27</ProductThumbnailTitle>
      </ProductThumbnail>
      <br />
      <ProductThumbnail>
        <ProductThumbnailImage>
          <img
            src="https://storeframework.vtexassets.com/unsafe/1440x0/center/middle/https%3A%2F%2Fstoreframework.vtexassets.com%2Farquivos%2Fids%2F190903%2Funsplash-monitor.jpg%3Fv%3D637800152494200000"
            alt="Product Thumbnail"
            height={50}
            width={50}
          />
        </ProductThumbnailImage>
        <ProductThumbnailTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam temporibus aspernatur eius, libero illum, ex obcaecati,
          cupiditate repellat ducimus quam incidunt dicta nesciunt architecto
          voluptatum consectetur tempore corrupti deleniti.
        </ProductThumbnailTitle>
      </ProductThumbnail>
      <br />
      <ProductThumbnail>
        <ProductThumbnailTitle>4k Philips Monitor 27</ProductThumbnailTitle>
      </ProductThumbnail>
      <br />
      <ProductThumbnail>
        <ProductThumbnailTitle>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sunt
          consectetur adipisci, ratione dolorem amet, laborum soluta incidunt
          nisi doloremque quia a eligendi. Eligendi obcaecati iusto, iste
          incidunt aspernatur nam.
        </ProductThumbnailTitle>
      </ProductThumbnail>
    </section>
  );
}
