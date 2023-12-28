import React, { FC } from 'react'
import Image from 'next/image'

import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import mainImage from '../../../public/images/mainimg-min.png'
import mainImage1 from '../../../public/images/carouselimg-min.jpg'
import mainImage2 from '../../../public/images/image-min.png'
import mainImage3 from '../../../public/images/carouselImage-min.png'
const HomeHero: FC = () => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={600}
      loop={true}
      parallax={true}
      modules={[Autoplay, Pagination, Parallax]}
    >
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage} alt="Image" className="picture" loading="lazy" />
          <div className="absolute-container">
            <div className="title" data-swiper-parallax="-700">
              Flashback to Festive Cheers!
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Relive the joyous moments from last year&apos;s celebration at Science and Engineering Fest 2023 – where
              laughter and merriment filled the air!
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage1} alt="Image" className="picture" loading="lazy" />
          <div className="absolute-container">
            <div className="title" data-swiper-parallax="-700">
              Last year&apos;s achievement!
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Celebrate the success of last year&apos;s Science and Engineering Fest with joyous cake-cutting, capturing
              the spirit of achievement and happiness.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage2} alt="Image" className="picture" loading="lazy" />
          <div className="absolute-container">
            <div className="title" data-swiper-parallax="-700">
              Game On – Fun Remembered!
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Jam, Brain Games, Human Ludo, Rubik’s Rumble, and Paper Plane challenges from last year’s fest – where the
              thrill of fun and games lingered in every moment!
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-70%">
          <Image src={mainImage3} alt="Image" className="picture" loading="lazy" />
          <div className="absolute-container">
            <div className="title" data-swiper-parallax="-700">
              Exhibit Extravaganza
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Relive the excitement of Science Cinema, Science Circus, and the Mini Zoo – unforgettable exhibitions.
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeHero
