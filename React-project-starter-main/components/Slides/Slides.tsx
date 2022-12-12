import React from "react";
import Image from "next/image";
import s from "./Slides.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slides = () => {
  return (
    <>
      <div className={s.body}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={s.mySwiper}
        >
          <SwiperSlide className={s.slide}>
            <div className={s.slideFlex}>
              <div className={s.zumba}>
                <Image src="/images/zumba.png" layout="fill" />
              </div>
              <div className={s.info}>
                <div className={s.lineOne}>
                  <div>
                    {" "}
                    <h1 className={s.half}>
                      Zumba<span className={s.mid}>|</span>
                      <span className={s.halfTwo}>by Rutu Fitness</span>
                    </h1>
                  </div>
                  <div className={s.date}>
                    {" "}
                    <Image src="/images/date.png" layout="fill" />
                  </div>
                </div>

                <div className={s.lineTwo}>
                  <div className={s.time}>
                    <span className={s.clockZumba}>
                      <Image src="/images/Clock-zumba.png" layout="fill" />
                    </span>
                    <span className={s.time2}> 5:30pm to 6:30pm </span>
                    </div>
                    <div className={s.timeline}>
                    <span className={s.price}>
                      Price: <span className={s.yellowBg}>Rs.200/person</span>{" "}
                    </span>
                    </div>  
                </div>
                {/* <div className={s.lineTwo}>
                  <h1 className={s.time}>
                    <span className={s.clockZumba}>
                      <Image src="/images/Clock-zumba.png" layout="fill" />
                    </span>
                    <span className={s.time2}> 5:30pm to 6:30pm </span>
                    <span className={s.price}>
                      Price: <span className={s.yellowBg}>Rs.200/person</span>{" "}
                    </span>
                  </h1>
                </div> */}
                <div className={s.description}>
                  <h1>Description:</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div>
                  <button className={s.buyPassBtn}>Buy Pass</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <div className={s.slideFlex}>
              <div className={s.zumba}>
                <Image src="/images/zumba.png" layout="fill" />
              </div>
              <div>
                <div className={s.lineOne}>
                  <div>
                    {" "}
                    <h1 className={s.half}>
                      Zumba<span className={s.mid}>|</span>
                      <span className={s.halfTwo}>by Rutu Fitness</span>
                    </h1>
                  </div>
                  <div className={s.date}>
                    {" "}
                    <Image src="/images/date.png" layout="fill" />
                  </div>
                </div>
                <div className={s.lineTwo}>
                  <h1 className={s.time}>
                    <span className={s.clockZumba}>
                      <Image src="/images/Clock-zumba.png" layout="fill" />
                    </span>
                    <span className={s.time2}> 5:30pm to 6:30pm </span>
                    <span className={s.price}>
                      Price: <span className={s.yellowBg}>Rs.200/person</span>{" "}
                    </span>
                  </h1>
                </div>
                <div className={s.description}>
                  <h1>Description:</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div>
                  <button className={s.buyPassBtn}>Buy Pass</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <div className={s.slideFlex}>
              <div className={s.zumba}>
                <Image src="/images/zumba.png" layout="fill" />
              </div>
              <div>
                <div className={s.lineOne}>
                  <div>
                    {" "}
                    <h1 className={s.half}>
                      Zumba<span className={s.mid}>|</span>
                      <span className={s.halfTwo}>by Rutu Fitness</span>
                    </h1>
                  </div>
                  <div className={s.date}>
                    {" "}
                    <Image src="/images/date.png" layout="fill" />
                  </div>
                </div>
                <div className={s.lineTwo}>
                  <h1 className={s.time}>
                    <span className={s.clockZumba}>
                      <Image src="/images/Clock-zumba.png" layout="fill" />
                    </span>
                    <span className={s.time2}> 5:30pm to 6:30pm </span>
                    <span className={s.price}>
                      Price: <span className={s.yellowBg}>Rs.200/person</span>{" "}
                    </span>
                  </h1>
                </div>
                <div className={s.description}>
                  <h1>Description:</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div>
                  <button className={s.buyPassBtn}>Buy Pass</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <div className={s.slideFlex}>
              <div className={s.zumba}>
                <Image src="/images/zumba.png" layout="fill" />
              </div>
              <div>
                <div className={s.lineOne}>
                  <div>
                    {" "}
                    <h1 className={s.half}>
                      Zumba<span className={s.mid}>|</span>
                      <span className={s.halfTwo}>by Rutu Fitness</span>
                    </h1>
                  </div>
                  <div className={s.date}>
                    {" "}
                    <Image src="/images/date.png" layout="fill" />
                  </div>
                </div>
                <div className={s.lineTwo}>
                  <h1 className={s.time}>
                    <span className={s.clockZumba}>
                      <Image src="/images/Clock-zumba.png" layout="fill" />
                    </span>
                    <span className={s.time2}> 5:30pm to 6:30pm </span>
                    <span className={s.price}>
                      Price: <span className={s.yellowBg}>Rs.200/person</span>{" "}
                    </span>
                  </h1>
                </div>
                <div className={s.description}>
                  <h1>Description:</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div>
                  <button className={s.buyPassBtn}>Buy Pass</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slides;
