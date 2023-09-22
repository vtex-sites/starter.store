import { Tag } from "@faststore/ui";
import styles from "./CustomBuyButton.module.scss";

import React from "react";

export default function CustomBuyButton() {
  return (
    <section className={styles.CustomBuyButton}>
      <Tag variant="neutral" label="Tag" onClose={() => {}} />
    </section>
  );
}
