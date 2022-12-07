import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import s from "./Slider.module.scss";

export default function Slider() {
  return (
    <>
      <div className={s.heading}>
        <div className={s.instagram}>
          <Image
            className={s.igImg}
            src="/images/instagram.png"
            layout="fill"
          />
        </div>
        <div className={s.text}>
          <h1>
            Our <br /> Instagram{" "}
          </h1>
          <h2 className={s.viewAll}>View all</h2>
        </div>
      </div>

      <div className={s.body}>
        <Swiper
          slidesPerView={4}
          spaceBetween={-60}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className={s.mySwiper}
        >
          <SwiperSlide>
            <div className={s.slideOne}>
              <Image
                className={s.slide}
                src="/images/slideOne.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideTwo}>
              <Image
                className={s.slide}
                src="/images/slideTwo.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideThree}>
              <Image
                className={s.slide}
                src="/images/slideThree.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideFour}>
              <Image
                className={s.slide}
                src="/images/slideFour.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideOne}>
              <Image
                className={s.slide}
                src="/images/slideOne.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideTwo}>
              <Image
                className={s.slide}
                src="/images/slideTwo.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideThree}>
              <Image
                className={s.slide}
                src="/images/slideThree.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slideFour}>
              <Image
                className={s.slide}
                src="/images/slideFour.png"
                layout="fill"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
