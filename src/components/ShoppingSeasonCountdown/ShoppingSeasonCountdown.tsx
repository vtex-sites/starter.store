import { Counter } from "./Counter";
import styles from './ShoppingSeasonCountdown.module.scss'

export interface CountdownProps {
  /**
   * The text that will be displayed for the customer
   */
  content: string;
  /**
   * The time which we are counting down to as a string
   */
  date: string;
}

export function ShoppingSeasonCountdown({ content, date }: CountdownProps) {
  const targetTime = new Date(date);

  return (
    <section className={`section ${styles.section}`} data-countdown>
      <div data-countdown-wrapper data-fs-content="countdown">
        {content}
        <Counter targetTime={targetTime} />
      </div>
    </section>
  );
}