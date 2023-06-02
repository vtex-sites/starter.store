import { Countdown } from "./Countdown"


export default function ShoppingSeasonCountdown({ content, date }) {
  const targetTime = new Date(date)
  
  return <h1>{content} <Countdown targetTime={targetTime} /></h1>
}