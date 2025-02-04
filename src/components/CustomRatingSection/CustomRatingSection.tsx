import {
  Rating as UIRating,
  RatingField as UIRatingField,
} from "@faststore/ui";

import { useState } from "react";

import styles from "./customRatingSection.module.scss";

export default function CustomRatingField() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <section className={styles.customRatingField}>
      <h2>RatingField Section</h2>
      <UIRatingField
        id="rating-field"
        label="Rate the product from 1 to 5 stars"
        value={rating1}
        onChange={(value) => setRating1(value)}
      />
      <UIRating value={rating1} />
      <UIRatingField
        id="rating-field-error"
        label="Rate the product from 1 to 5 stars"
        value={rating2}
        onChange={(value) => setRating2(value)}
        error="This field is required"
      />
      <UIRating value={rating2} />
      <UIRatingField
        id="rating-field-disabled"
        label="Rate the product from 1 to 5 stars"
        value={rating3}
        onChange={(value) => setRating3(value)}
      />
      <UIRating value={rating3} />
    </section>
  );
}
