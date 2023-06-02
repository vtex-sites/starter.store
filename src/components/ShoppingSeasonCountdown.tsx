import { Countdown } from "./Countdown"


export default function ShoppingSeasonCountdown({ content, date }) {
  const targetTime = new Date(date)

  return (
    <div data-countdown>
      <div data-countdown-wrapper className="layout__content">
        {content}
        <Countdown targetTime={targetTime} />
      </div>
    </div>
  )
}