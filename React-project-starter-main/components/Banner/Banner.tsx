import React from "react";
import Image from "next/image";
import s from "./Banner.module.scss";

const Banner = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.objects}>
          <Image src="/images/objects.png" layout="fill" />
        </div>
        <div>
          <div className={s.title}>
            <div className={s.bolt}>
              <Image src="/images/orange-bolt.png" layout="fill" />
            </div>
            <div className={s.text}>
              <h1>THE HAPPY DOOR FLEA</h1>
            </div>
            <div className={s.wave}>
              <Image src="/images/wave.png" layout="fill" />
            </div>
          </div>
          <div className={s.bookingInfo}>
            <div className={s.dates}>
              <div className={s.calendarIcon}>
                <Image src="/images/Icon-Calendar.png" layout="fill" />
              </div>
              <div>
                <h3>15th & 16th September 2022</h3>
              </div>
            </div>
            <div className={s.time}>
              <div className={s.clockIcon}>
                <Image src="/images/Icon-Clock.png" layout="fill" />
              </div>
              <div>
                <h3>16:00 Hours Onwards</h3>
              </div>
            </div>
            <div className={s.location}>
              <div className={s.gpsIcon}>
                <Image src="/images/Icon-Location.png" layout="fill" />
              </div>
              <div>
                <h3>Sportvilla Arena </h3>
              </div>
            </div>
            <div>
              <button className={s.buyPassBtn}>Buy Pass</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.wrapper}>
        <h1 className={s.target}>
          {" "}
          <span className={s.marqueeStyle}>
            Shopping Food Dance Live Music
          </span>{" "}
          <span className={s.marqueeStyle2}>
            Shopping Food Dance Live Music
          </span>
        </h1>
        <h1 className={s.activities}>Activities</h1>
      </div>
    </>
  );
};

export default Banner;
