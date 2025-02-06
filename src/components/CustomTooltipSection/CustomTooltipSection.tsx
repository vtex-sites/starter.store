import { Icon, Tooltip as UITooltip } from "@faststore/ui";

import styles from "./customTooltipSection.module.scss";

export default function CustomTooltipSection() {
  return (
    <section className={styles.customTooltipSection}>
      <h2>Custom Tooltip Section</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quis
        tempora quas quibusdam aliquam doloribus, et reiciendis
        <UITooltip
          id="textarea-field"
          content="Share your thoughts about the product. How would you describe its quality?"
        >
          <Icon name="XCircle" />
        </UITooltip>
        totam perspiciatis dolores ipsum est consequuntur.
      </p>

      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quis
        tempora quas quibusdam aliquam doloribus, et reiciendis
        <UITooltip
          id="textarea-field"
          content="Share your thoughts about the product"
          dismissable
        >
          <Icon name="XCircle" />
        </UITooltip>
        totam perspiciatis dolores ipsum est consequuntur.
      </p>

      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quis
        tempora quas quibusdam aliquam doloribus, et reiciendis
        <UITooltip
          id="textarea-field"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum sequi asperiores dignissimos ad quaerat, a reiciendis vel! Quaerat deleniti, assumenda iure repudiandae possimus facere voluptatem aspernatur at sit molestias."
          dismissable
        >
          <Icon name="XCircle" />
        </UITooltip>
        totam perspiciatis dolores ipsum est consequuntur.
      </p>
    </section>
  );
}
