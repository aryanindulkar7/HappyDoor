import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import s from "./Sponser.module.scss";

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

      <div className={s.containerLineOne}>
        <div className={s.container}></div>
        <div className={s.container}></div>
        <div className={s.container}></div>
        <div className={s.container}></div>
      </div>

      <div className={s.containerLineTwo}>
        <div className={s.containerTwo}></div>
        <div className={s.containerTwo}></div>
        <div className={s.containerTwo}></div>
        <div className={s.containerTwo}></div>
      </div>
    </div>
  );
}

export default Sponser;
