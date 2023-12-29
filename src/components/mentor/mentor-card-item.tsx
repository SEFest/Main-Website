import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          pb: 4,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            // height: 300,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={400} height={500} alt={'Mentor ' + item.id} />
        </Box>
        <Box sx={{ mb: 2, height: 50 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.2rem' }}>
            {item.name}
          </Typography>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.2rem' }}>
            {item.secondName}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '1em' }}>{item.category}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
