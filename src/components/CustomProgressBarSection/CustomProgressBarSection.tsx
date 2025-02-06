import { ProgressBar } from "@faststore/ui";

import styles from "./customProgressBarSection.module.scss";

export default function CustomProgressBarSection() {
  return (
    <section className={styles.customProgressBarSection}>
      <ProgressBar value={0} />
      <br />
      <ProgressBar value={50} />
      <br />
      <ProgressBar value={100} />
      <br />
    </section>
  );
}
