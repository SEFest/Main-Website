import React, { FC, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import mainImage from '../../../public/images/mainimg-min.png'
import mainImage1 from '../../../public/images/carouselimg-min.jpg'
import mainImage2 from '../../../public/images/ludo.png'
import mainImage3 from '../../../public/images/carouselImage-min.png'
import mainImage4 from '../../../public/images/race.png'
const HomeHero: FC = () => {
  interface Slide {
    mainImage: StaticImageData
    title: string
    subtitle: string
  }

  const slides: Slide[] = [
    {
      mainImage: mainImage,
      title: 'Flashback to Festive Cheers!',
      subtitle:
        "Relive the joyous moments from last year's celebration at Science and Engineering Fest 2023 – where laughter and merriment filled the air!",
    },
    {
      mainImage: mainImage1,
      title: 'Women in Science',
      subtitle: "Pioneering women redefine science's future",
    },
    {
      mainImage: mainImage2,
      title: 'Game On – Fun Remembered!',
      subtitle: 'Rolling the dice of camaraderie, strategy and laughter in the educational journey.',
    },
    {
      mainImage: mainImage3,
      title: 'Exhibit Extravaganza',
      subtitle:
        'Relive the excitement of Science Cinema, Science Circus, and the Mini Zoo – unforgettable exhibitions.',
    },
    {
      mainImage: mainImage4,
      title: 'Exhibit Extravaganza',
      subtitle: 'Education in progress: where classrooms transform into gaming arenas.',
    },
  ]
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is less than a certain threshold (e.g., 600px)
      const isMobileDevice = window.innerWidth < 600
      setIsMobile(isMobileDevice)
    }

    // Initial check on component mount
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={800}
      loop={true}
      parallax={true}
      modules={[Autoplay, Parallax]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
            <Image src={slide.mainImage} alt="Image" priority className="picture" />
            {!isMobile && (
              <div className="absolute-container">
                <div className="title" data-swiper-parallax="-700">
                  {slide.title}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {slide.subtitle}
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeHero
