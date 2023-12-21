import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  const registeration = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSe5vxRYzNb_rN9fWFXzsHkEbWBOIbHAlxDbPg2zOTlBrpCtJA/viewform?pli=1',
      '_blank'
    )
  }
  return (
    <Box sx={{ '& button': { mr: 2 } }}>
      <div onClick={registeration}>
        <StyledButton disableHoverEffect={true}>Register Now</StyledButton>
      </div>
    </Box>
  )
}

export default AuthNavigation
