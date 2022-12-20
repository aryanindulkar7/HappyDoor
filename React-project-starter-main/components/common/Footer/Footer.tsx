import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.subWrapper}>
            <div className={s.subBg}>
              <Image
                className={s.subBgImg}
                src="/images/sub-bg.png"
                layout="fill"
              />
            </div>
            <div className={s.subscribe}>
              <h1>Subscribe</h1>
            </div>
          </div>
        </div>
        <div className={s.belowSubscribe}>
          <p>Be the first to know about all our upcoming events!</p>
        </div>
        <div className={s.center}>
          <div className={s.flex}>
            <div>
              <input
                className={s.myInput}
                type="text"
                name="myInput"
                placeholder="lorem@ipusum.com"
                size={80}
              />
            </div>
            <div className={s.btnAlign}>
              <button className={s.submitButton} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bottomSection}>
        <div className={s.footerLogo}>
          <Image src="/images/logo.png" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default Footer;
