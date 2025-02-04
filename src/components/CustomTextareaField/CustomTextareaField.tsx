import { TextareaField as UITextareaField } from "@faststore/ui";

import styles from "./customTextareaField.module.scss";

export default function CustomTextareaField() {
  return (
    <section className={styles.customTextareaField}>
      <h2>Textarea Field Section</h2>
      <br />
      <UITextareaField
        id="textarea-field"
        label="Share your thoughts about the product. How would you describe its quality?"
      />
      <UITextareaField id="textarea-field-short-label" label="Short label" />
      <UITextareaField
        id="textarea-field-error"
        label="Share your thoughts about the product. How would you describe its quality?"
        error="This field is required"
      />
    </section>
  );
}
