import React, { useEffect, useState } from "react";

export interface CountdownProps {
  /**
   * The time which we are counting down to
   */
  targetTime: Date
} 

export const Countdown = ({ targetTime }: CountdownProps) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = (targetTime as any) - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p data-counter>
      <span>{days}d </span>
      <span>{hours}h </span>
      <span>{minutes}min </span>
      <span>{seconds}s</span>
    </p>
  )
}
