import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
      <div className={s.container}>
        <div>
        <div className={s.subBg}>
          <Image 
                src="/images/sub-bg.png"
                layout="fill"
              />
           </div> 
           <div> <h1 className={s.subscribe}>Subscribe</h1></div>
        </div>
          <div><p className={s.belowSubscribe}>Be the first to know about all our upcoming events!</p></div>
          <div><input className={s.myInput} type="text" name="myInput" placeholder="lorem@ipusum.com" size={80} />
          <button className={s.submitButton} type="submit">Submit</button>
          </div>
      </div>
      <div className={s.bottomSection}>
        <div className={s.footerLogo}>
        <Image 
                src="/images/logo.png"
                layout="fill"
              />
        </div>
      </div>
    </>
  );
};

export default Footer;
