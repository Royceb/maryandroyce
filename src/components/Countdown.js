import styles from '../assets/scss/components/countdown.scss'
import React from 'react'
const WEDDING_DATE = new Date('07/18/2020')

const Countdown = () => {
  const now = new Date()
  var diffInTime = WEDDING_DATE.getTime() - now.getTime()
  var differenceInDays = diffInTime / (1000 * 3600 * 24)

  return (
    <div className={styles['countdown']}>
      <span className="count">{differenceInDays.toFixed(0)}</span> days to go!
    </div>
  )
}

export default Countdown
