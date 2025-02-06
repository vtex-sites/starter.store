import {
  Rating as UIRating,
  RatingField as UIRatingField,
} from "@faststore/ui";

import { useState } from "react";

import styles from "./customRatingFieldSection.module.scss";

export default function CustomRatingFieldSection() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <section className={styles.customRatingFieldSection}>
      <h2>RatingField</h2>
      <UIRatingField
        id="rating-field"
        label="Rate the product from 1 to 5 stars"
        value={rating1}
        onChange={(value) => setRating1(value)}
      />
      <h2>Rating</h2>
      <UIRating value={rating1} />
      <br />
      <h2>RatingField</h2>
      <UIRatingField
        id="rating-field-error"
        label="Rate the product from 1 to 5 stars"
        value={rating2}
        onChange={(value) => setRating2(value)}
        error="This field is required"
      />
      <h2>Rating</h2>
      <UIRating value={rating2} />
      <br />
      <h2>RatingField</h2>
      <UIRatingField
        id="rating-field-disabled"
        label="Rate the product from 1 to 5 stars"
        value={rating3}
        onChange={(value) => setRating3(value)}
        disabled
      />
      <h2>Rating</h2>
      <UIRating value={rating3} />
    </section>
  );
}
