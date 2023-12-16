import React, { FC } from 'react'
import Image from 'next/image'

import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HomeHero: FC = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={600}
      loop={true}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={require('../../../public/images/DSC_6642.jpg')} alt="Image" className="picture" />
          <div className="title" data-swiper-parallax="-700">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeHero
