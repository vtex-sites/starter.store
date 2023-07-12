import dynamic from "next/dynamic"

import { CounterProps } from './Counter'

export interface CountdownProps {
  /**
   * The text that will be displayed for the customer
   */
  content: string
  /**
   * The time which we are counting down to as a string
   */
  date: string
}

export function Countdown({ content, date }: CountdownProps) {
  const Counter = dynamic<CounterProps>(() => import('./Counter').then(mod => mod.Counter ), {
    ssr: false
  })

  const targetTime = new Date(date)

  return (
    <div data-countdown>
      <div data-countdown-wrapper data-fs-content="countdown">
        {content}
        <Counter targetTime={targetTime} />
      </div>
    </div>
  )
}
