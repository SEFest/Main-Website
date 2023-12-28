import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))
const handleTitleClick = (title: any) => {
  let redirectUrl
  if (
    title === 'Department Of Mechanical Engineering' ||
    title === 'Department Civil Engineering' ||
    title === 'Department Of Electrical Engineering'
  ) {
    redirectUrl = 'https://ucp.edu.pk/faculty-of-engineering/'
  } else {
    redirectUrl = 'https://ucp.edu.pk/faculty-of-science-technology/'
  }
  window.open(redirectUrl, '_blank')
}
const HomeFeature: FC = () => {
  return (
    <>
      <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                <Image src="/images/aboutImage.jpg" alt="Testimonial img" width={1000} height={700} loading="lazy" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 40, md: 50 },
                  ml: { xs: 0, md: 4 },
                  mt: 2,
                  mb: 3,
                  lineHeight: 1,
                  fontWeight: 'bold',
                }}
              >
                About{' '}
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  US <br />
                </Typography>
              </Typography>

              <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
                Welcome to the Science and Engineering Fest 2024, a collaborative initiative by the Faculty of
                Engineering (FOE) and Faculty of Science and Technology (FOST). Our mission is to inspire, educate, and
                celebrate the diverse facets of science and engineering. Join us in fostering a community of curiosity,
                innovation, and knowledge.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box id="departments" sx={{ pb: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={15}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 40, md: 50 },
                  ml: { xs: 0, md: 4 },
                  mt: 2,
                  mb: 3,
                  lineHeight: 1,
                  fontWeight: 'bold',
                }}
              >
                Our{' '}
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Departments <br />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 20, md: 28 },
                      left: 100,
                      '& img': { width: { xs: 130, md: 175 }, height: 'auto' },
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                </Typography>
              </Typography>

              <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
                Discover the exciting worlds of science and engineering within our unique departments. From exploring
                the wonders of nature to crafting cutting-edge technologies, each department is a hub of creativity and
                innovation. Join us on this journey of discovery and advancement as we push the boundaries of
                knowledge together
              </Typography>

              <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
                {data.map(({ title }, index) => (
                  <Grid key={String(index)} item xs={12} md={6} onClick={() => handleTitleClick(title)}>
                    <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <Typography
                          variant="h3"
                          sx={{ fontSize: '1.2rem', mb: 1, color: 'secondary.main', cursor: 'pointer' }}
                        >
                          {title}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default HomeFeature
