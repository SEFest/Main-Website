import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import ModalComponent from '../home/Modal'
interface Data {
  title: string
}
const courseMenu: Array<Navigation> = [
  {
    label: 'Competitive Module',
    path: 'popular-course',
  },
  {
    label: 'Workshop Module',
    path: 'popular-course',
  },
  {
    label: 'Exhibition & Shows Module',
    path: 'popular-course',
  },
  {
    label: 'Fun & Games Module',
    path: 'popular-course',
  },
]

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label }) => {
  return (
    <div>
      <MuiLink
        underline="hover"
        sx={{
          cursor: 'pointer',
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </div>
  )
}

const FooterNavigation: FC = () => {
  const FAQ = { question: 'This is a question', answer: 'This is an answer' }
  const [selectedItem, setSelectedItem] = React.useState<any>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const handleCloseModal = () => {
  //   setSelectedItem(FAQ)
  //   setIsModalOpen(false)
  // }
  // const handleItemClick = (label: any) => () => {
  //   console.log('Modal')
  //   if (label === 'FAQ') {
  //     setSelectedItem(label)
  //     setIsModalOpen(true)
  //     console.log('Open FAQ modal')
  //   }
  // }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={7}>
        <FooterSectionTitle title="Modules" />
        {courseMenu.map(({ label }, index) => (
          <NavigationItem label={label} key={index} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label }, index) => (
          <NavigationItem key={index} label={label} />
        ))}
      </Grid>
      {/* <ModalComponent open={isModalOpen} onClose={handleCloseModal} selectedItem={selectedItem} /> */}
    </Grid>
  )
}

export default FooterNavigation
