import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Image from 'next/image'
const Footer: FC = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Box sx={{ width: '100%', mb: { xs: 3, md: 0 } }}>
                <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                  Science & Engineering Festival
                </Typography>
                <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                  Science & Engineering Festival is an annual event hosted jointly by UCP&apos;s Faculty of Science&
                  Technology and Faculty of Engineering now.
                </Typography>
                <FooterSocialLinks />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <FooterNavigation />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
          backgroundColor: '#055FDD',
          color: 'primary.contrastText',
        }}
      >
        <Box
          onClick={() => {
            window.open('https://icodebugz.com', '_blank')
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: 15, md: 25 }, cursor: 'pointer' }}>
            Developed by iCode Bugz
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer
