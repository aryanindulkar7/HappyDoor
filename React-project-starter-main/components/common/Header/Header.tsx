import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { relative } from "path";
import { FC, useState } from "react";
import s from "./Header.module.scss";
import { MenuItems } from "./MenuItems";

interface Props {
  hideMenu?: boolean;
}
const Header: FC<Props> = ({ hideMenu }) => {
  const [isMenuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    setMenuActive((t) => !t);

    if (isMenuActive) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div><div className={`${s.container} ${hideMenu ? s.hideMenu : ""}`}>
      <div className={s.menuWrapper}>
        <div
          className={`${s.hamburgerMenu} hamburger-menu ${isMenuActive ? s.active : ""}`}
          onClick={menuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={s.logo}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                alt="whales logo"
                layout="fill" />
            </a>
          </Link>
        </div>
        <div className={`${s.content} header-content`}>
          <div className={`${s.menuItems} ${isMenuActive ? s.active : ""}`}>
            {MenuItems.map((item, i) => (
              <Link href={item.url} key={i}>
                <a
                  className={s.item}
                  target={item.isExternal ? "_blank" : "_self"}
                  onClick={() => {
                    setMenuActive(false);
                  } }
                >
                  {item.label}
                </a>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
