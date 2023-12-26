import React from "react";
import { Button, Icon, SelectField } from "@faststore/ui";

import styles from "./ourStores.module.scss";

export interface OurStoresProps {
  title: string;
  description: string;
}

export default function OurStores(props: OurStoresProps) {
  return (
    <section className={styles.ourStores}>
      <h2 className={styles.ourStores__title}>{props.title}</h2>
      <p>{props.description}</p>
      <div className={styles.ourStores__content}>
        <SelectField
          id="select-state-store"
          label="State:"
          options={{
            newYork: "New York",
            arizona: "Arizona",
            massachusetts: "Massachusetts",
            hawaii: "Hawaii",
          }}
        />
        <SelectField
          id="select-city-store"
          label="City:"
          options={{
            newYorkCity: "New York City",
            phoenix: "Phoenix",
            boston: "Boston",
            honolulu: "Honolulu",
          }}
        />
        <Button
          variant="secondary"
          icon={<Icon name="ArrowRight" />}
          iconPosition="right"
        >
          Find Store
        </Button>
      </div>
    </section>
  );
}
