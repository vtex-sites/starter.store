import React, { useEffect, useState } from "react";
import { Skeleton } from "@faststore/ui";

export interface CounterProps {
  /**
   * The time which we are counting down to
   */
  targetTime: Date;
}

export const Counter = ({ targetTime }: CounterProps) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setCurrentTime(Date.now());

    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (currentTime === 0) {
    return <Skeleton size={{ width: "24 0px", height: "60.29px" }} />
  }

  const timeBetween = (targetTime as any) - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  return (
    <ul data-counter>
      <li>
        <span data-counter-number>{days}</span>
        <span data-counter-label>days</span>
      </li>
      <li>
        <span data-counter-number>{hours}</span>
        <span data-counter-label>hours</span>
      </li>
      <li>
        <span data-counter-number>{minutes}</span>
        <span data-counter-label>min</span>
      </li>
      <li>
        <span data-counter-number>{seconds}</span>
        <span data-counter-label>sec</span>
      </li>
    </ul>
  );
};
