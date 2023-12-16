import React, { FC } from 'react'
import Image from 'next/image'

import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import mainImage from '../../../public/images/mainimg.png'
const HomeHero: FC = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={600}
      loop={true}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Parallax]}
    >
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage} alt="Image" className="picture" />
          <div className="title" data-swiper-parallax="-700">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage} alt="Image" className="picture" />
          <div className="title" data-swiper-parallax="-700">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage} alt="Image" className="picture" />
          <div className="title" data-swiper-parallax="-700">
            Slide 3
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
