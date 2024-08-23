import { Card as UICard } from "@faststore/ui";

import styles from "./customCard.module.scss";

export default function CustomCard() {
  return (
    <section
      className={styles.customCard}
      style={{ backgroundColor: "white", margin: "5rem" }}
    >
      <UICard title="Card Title" iconName="X" maxWidth="300px">
        New Card Content New Card Content New Card Content New Card Content New
        Card Content New Card Content New Card Content
      </UICard>
    </section>
  );
}
