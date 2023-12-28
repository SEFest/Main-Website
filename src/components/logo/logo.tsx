import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import MainLogo from '../../../public/images/mainLogo.png'
interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = () => {
  return (
    <Box style={{ cursor: 'pointer' }} sx={{ width: { xs: 200, md: 300 }, height: { md: 60 } }}>
      <Image src={MainLogo} alt="Logoimage" loading="lazy" />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
