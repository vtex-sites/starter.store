import { Card as UICard } from "@faststore/ui";
import "@faststore/ui/src/components/molecules/Card/styles.scss";

export default function CustomCard() {
  return (
    <section style={{ backgroundColor: "white", margin: "5rem" }}>
      <UICard title="Card Title" iconName="X" maxWidth="300px">
        New Card Content New Card Content New Card Content New Card Content New
        Card Content New Card Content New Card Content
      </UICard>
    </section>
  );
}
