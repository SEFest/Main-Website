import React, { useContext, useEffect } from 'react'
// import './countdown.css'
import { useCountdown } from '../hooks/useCountdown.js'
import { LaunchContext } from '../context/LaunchTime'
import { Box, Grid, Typography } from '@mui/material'

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
      <a className="btn text-white bg-primary hover:bg-primary w-full mb-4 sm:w-auto sm:mb-0">
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
      <a rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  )
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown('1/24/2024')
  // const launcContext = useContext(LaunchContext)

  // const { showRegister, setShowRegister } = launcContext

  useEffect(() => {
    // if (days + hours + minutes + seconds <= 0) {
    //   setShowRegister(true)
    // }
  }, [])

  if (days + hours + minutes + seconds <= 0) {
    return (
      <Box sx={{}}>
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            color: '#bf0b6d',
            fontWeight: 'inherit',
            position: 'relative',
            '& svg': {
              position: 'absolute',
              top: -16,
              right: -21,
              width: { xs: 22, md: 30 },
              height: 'auto',
            },
          }}
        >
          Join this event
        </Typography>
        <ExpiredNotice />
      </Box>
    )
  } else {
    return (
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            height: '100%',
            width: { xs: '100%', md: '90%' },
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography variant="h1" sx={{ ml: { xs: 0, md: 45 }, fontSize: { xs: 30, md: 48 } }}>
            Join this event
          </Typography>
        </Box>
        <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
      </Grid>
    )
  }
}

export default CountdownTimer
