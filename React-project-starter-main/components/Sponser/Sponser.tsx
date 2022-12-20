import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import s from "./Sponser.module.scss";
import SponserSlide from "./SponserSlide";

function Sponser() {
  return (
    <div className={s.body}>
      <div className={s.header}>
        <div className={s.sponsers}>
          <div>
            <h1>Sponsers</h1>
          </div>
          <div className={s.underline}>
            {" "}
            <Image src="/images/underline.png" layout="fill" />
          </div>
        </div>
      </div>
      <SponserSlide />
    </div>
  );
}

export default Sponser;
