import React, { useContext, useEffect } from 'react'
// import './countdown.css'
import { useCountdown } from '../hooks/useCountdown.js'
import { LaunchContext } from '../context/LaunchTime'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

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

  if (days + hours + minutes + seconds <= 0) {
    return <Box sx={{}}></Box>
  } else {
    return (
      <Box
        sx={{
          pt: {
            xs: 6,
            md: 8,
          },
          pb: 14,
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  height: '100%',
                  width: { xs: '100%', md: '90%' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 40 } }}>
                  Join Our Event
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  backgroundColor: 'secondary.main',
                  borderRadius: 2,
                  marginX: { xs: '0rem', sm: '10rem', md: '10rem' },
                  paddingY: { xs: '0vh', md: '2vh' },
                }}
              >
                <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5rem ',
            marginBottom: '-6rem',
          }}
        >
          <Box>
            <Button
              variant="contained"
              onClick={() => {
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSe5vxRYzNb_rN9fWFXzsHkEbWBOIbHAlxDbPg2zOTlBrpCtJA/viewform?pli=1',
                  '_blank'
                )
              }}
              sx={{
                backgroundColor: 'primary.main',
                transition: 'background-color 0.5s ease-in-out',
                paddingY: { xs: '1rem', md: '2rem' },
                paddingX: { xs: '2.5rem', md: '5rem' },
                fontSize: { xs: '1rem', md: '1.5rem' },
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  color: 'primary.main',
                },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Grid>
      </Box>
    )
  }
}

export default CountdownTimer
