import React, { useContext, useEffect } from 'react'
// import './countdown.css'
import { useCountdown } from '../hooks/useCountdown.js'
import { LaunchContext } from '../context/LaunchTime'

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

const ExpiredNotice = () => {
  return (
    <div>
      <a
        className="btn text-white bg-primary hover:bg-primary w-full mb-4 sm:w-auto sm:mb-0"
        href="https://app.thewrestlebreak.com/#/register"
      >
        Register to unlock extra features{' '}
        <svg
          className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
            fillRule="nonzero"
          />
        </svg>
      </a>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  )
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown('1/19/2024')
  // const launcContext = useContext(LaunchContext)

  // const { showRegister, setShowRegister } = launcContext

  useEffect(() => {
    // if (days + hours + minutes + seconds <= 0) {
    //   setShowRegister(true)
    // }
  }, [])

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
  }
}

export default CountdownTimer
