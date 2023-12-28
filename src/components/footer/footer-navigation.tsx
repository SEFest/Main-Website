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

const companyMenu: Array<Data> = [
  { title: 'Dr. Shafiq Ur Rehman' },
  { title: '+92 333 4566845' },
  { title: 'Engr. Nabeel Khalid' },
  { title: '+92 344 9008008' },
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
  const removeSpaces = (inputString: string) => {
    return inputString.replace(/\s/g, '')
  }
  const openLinkForPhoneNumber = (phoneNumber: string) => {
    let link = ''

    if (phoneNumber === '+92 333 4566845' || phoneNumber === '+92 344 9008008') {
      const removedNumber = removeSpaces(phoneNumber)
      link = `https://wa.me/${removedNumber}`
      window.open(link, '_blank')
    }
  }

  return (
    <Grid container sx={{ ml: { xs: 0, md: 35 }, mt: { xs: 10, md: 0 } }}>
      <Grid item xs={12} md={5}>
        <FooterSectionTitle title="Modules" />
        {courseMenu.map(({ label }, index) => (
          <NavigationItem label={label} key={index} />
        ))}
      </Grid>
      <Grid item xs={12} md={5} sx={{ mt: { xs: 3, md: 0 } }}>
        <FooterSectionTitle title="Contact Us" />
        {companyMenu.map(({ title }, index) => (
          <div key={index} onClick={() => openLinkForPhoneNumber(title)}>
            <NavigationItem key={index} label={title} />
          </div>
        ))}
      </Grid>
      {/* <ModalComponent open={isModalOpen} onClose={handleCloseModal} selectedItem={selectedItem} /> */}
    </Grid>
  )
}

export default FooterNavigation
