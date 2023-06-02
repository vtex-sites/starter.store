import dynamic from "next/dynamic"

import { CountdownProps } from './Countdown'

export interface ShoppingSeasonCountdownProps {
  /**
   * The text that will be displayed for the customer
   */
  content: string
  /**
   * The time which we are counting down to as a string
   */
  date: string
} 

export default function ShoppingSeasonCountdown({ content, date }: ShoppingSeasonCountdownProps) {
  const Countdown = dynamic<CountdownProps>(() => import('./Countdown').then(mod => mod.Countdown ), {
    ssr: false
  })
  
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