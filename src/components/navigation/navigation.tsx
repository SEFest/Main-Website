import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'
import { IconButton } from '@mui/material'

interface NavigationProps {
  stateChange: () => void
}

const Navigation: FC<NavigationProps> = ({ stateChange }) => {
  const handleOpenPDF = () => {
    window.open('/Fest-Directives.pdf', '_blank')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <div key={destination} onClick={() => stateChange()} style={{ display: 'flex', justifyContent: 'center' }}>
          {label === 'Fest Directives' ? (
            <a href="/Fest-Directives.pdf" target="_blank" rel="noopener noreferrer" onClick={() => stateChange()}>
              <Box>
                <Box
                  sx={{
                    position: 'relative',
                    color: 'text.disabled',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 0, md: 3 },
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1.2rem', md: 'inherit' },
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      transform: 'rotate(3deg)',
                      '& img': { width: 44, height: 'auto' },
                    }}
                  >
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                  {label}
                </Box>
              </Box>
            </a>
          ) : (
            <ScrollLink to={destination} spy={true} smooth={true} duration={350} onClick={() => stateChange()}>
              <Box
                sx={{
                  position: 'relative',
                  color: 'text.disabled',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: { xs: 0, md: 3 },
                  mb: { xs: 3, md: 0 },
                  fontSize: { xs: '1.2rem', md: 'inherit' },
                  '& > div': { display: 'none' },
                  '&.current>div': { display: 'block' },
                  '&:hover': {
                    color: 'primary.main',
                    '&>div': {
                      display: 'block',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    transform: 'rotate(3deg)',
                    '& img': { width: 44, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
                {label}
              </Box>
            </ScrollLink>
          )}
        </div>
      ))}
    </Box>
  )
}

export default Navigation
