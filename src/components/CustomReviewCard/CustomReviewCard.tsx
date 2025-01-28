import { ReviewCard as UIReviewCard } from "@faststore/ui";

import styles from "./customReviewCard.module.scss";

export default function CustomReviewCard() {
  return (
    <section className={styles.customReviewCard}>
      <UIReviewCard
        reviewHeadline="Decent, but some issues"
        reviewRating={5}
        reviewText="I’ve been using these headphones daily for the past month, and they’ve exceeded all my expectations. Right out of the box, they feel premium, with a sleek design and sturdy build that gives confidence in their."
        reviewDate={new Date()}
        isVerified
        author="Sophia Carter"
      />
      <UIReviewCard
        reviewHeadline="Decent, but some issues"
        reviewRating={3}
        reviewText="I’ve been using these headphones daily for the past month, and they’ve exceeded all my expectations. Right out of the box, they feel premium, with a sleek design and sturdy build that gives confidence in their durability. Once you put them on, you’ll notice how well-padded the earcups and headband are, making them incredibly comfortable, even for long listening sessions. I’ve been using these headphones daily for the past month, and they’ve exceeded all my expectations. Right out of the box, they feel premium, with a sleek design and sturdy build that gives confidence in their durability. Once you put them on, you’ll notice how well-padded the earcups and headband are, making them incredibly comfortable, even for long listening sessions."
        reviewDate={new Date()}
        isVerified
        author="Sophia Carter"
      />
      <UIReviewCard
        reviewHeadline="Mind-Blowing Sound Quality, Superior Comfort, and Unmatched Noise-Canceling ind-Blowing Sound Quality, Superior Comfort, and Unmatched Noise-Canceling Mind-Blowing Sound Quality, Superior Comfort, and Unmatched Noise-Canceling ind-Blowing Sound Quality, Superior Comfort, and Unmatched Noise-Canceling"
        reviewRating={1}
        reviewText="The headphones are good, but not great. Sound is decent, but I found the bass a bit underwhelming. The fit is snug, which can be good for some, but it feels tight after about an hour of use. Build quality is okay, but they don’t feel very durable. If you’re on a budget, they’ll do the job, but they’re not perfect."
        reviewDate={new Date("2024-06-01")}
        author="Sophia Carter"
      />
    </section>
  );
}
