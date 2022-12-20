import React, { useRef, useState, useEffect } from "react";
import s from "./Sponser.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";

const SponserSlide = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper !== null) {
      // swiper.update();
    }
  }, [swiper]);
  const sliderOptions = {
    spaceBetween: 30,
    allowTouchMove: true,
    simulateTouch: true,
    speed: 300,
    watchSlidesProgress: true,
    loop: false,

    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper(swiperItem);
      });
    },
    navigation: true,
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
        // centeredSlides: true,
        // initialSlide: 2,
        // loop: true,
      },
      600: {
        slidesPerView: 1.6,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 22,
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 22,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 97,
      },
    },
  };

  return (
    <div className={`${s.container}`}>
      <div className={s.swiper}>
        <Swiper
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          speed={5000}
          mousewheel={true}
          keyboard={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          className={`${s.slider}`}
        >
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
        </Swiper>
      </div>
      <div className={s.swiper2}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          speed={5000}
          mousewheel={true}
          keyboard={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          className={`${s.slider}`}
        >
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
          <SwiperSlide className={s.slides}></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SponserSlide;
