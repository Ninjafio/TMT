"use client";

import React from "react";
import Logo from "public/Logo.svg";
import Phone from "public/Phone.svg";
import Email from "public/Email.svg";
import Burger from "public/Burger.svg";
import Close from "public/Close.svg"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [strokeMarginLeft, setStrokeMarginLeft] = React.useState<number>(0);
  const [strokeWidth, setStrokeWidth] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [sideMenuMargin, setSideMenuMargin] = React.useState<number>(270);
  const [isOpenSideMenu, setIsOpenSideMenu] = React.useState<boolean>(false);
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/" && !isHover) {
        if (screenWidth > 1230) {
          setStrokeWidth(120);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 1230) {
          setStrokeWidth(91);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 970) {
          setStrokeWidth(73);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 800) {
          setStrokeWidth(64);
          setStrokeMarginLeft(0);
        }
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleOnMouseEnter = (element: string) => {
    setIsHover(true)
    switch (element) {
      case "main":
        if (screenWidth > 1230) {
          setStrokeWidth(120);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 1230) {
          setStrokeWidth(91);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 970) {
          setStrokeWidth(73);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 800) {
          setStrokeWidth(64);
          setStrokeMarginLeft(0);
        }
        break;
      case "uslugi":
        if (screenWidth > 1230) {
        setStrokeWidth(100);
        setStrokeMarginLeft(153);
        }
        if (screenWidth <= 1230) {
        setStrokeWidth(77);
        setStrokeMarginLeft(126);
        }
        if (screenWidth <= 970) {
        setStrokeWidth(62);
        setStrokeMarginLeft(94);
        }
        if (screenWidth <= 800) {
          setStrokeWidth(54);
          setStrokeMarginLeft(73);
        }
        break;
      case "consult":
        if (screenWidth > 1230) {
        setStrokeWidth(363);
        setStrokeMarginLeft(290);
        }
        if (screenWidth <= 1230) {
        setStrokeWidth(279);
        setStrokeMarginLeft(238);
        }
        if (screenWidth <= 970) {
        setStrokeWidth(223);
        setStrokeMarginLeft(176);
        }
        if (screenWidth <= 800) {
          setStrokeWidth(195);
          setStrokeMarginLeft(139);
        }
        break;
      case "contacts":
        if (screenWidth > 1230) {
        setStrokeWidth(140);
        setStrokeMarginLeft(686);
        }
        if (screenWidth <= 1230) {
        setStrokeWidth(107);
        setStrokeMarginLeft(551);
        }
        if (screenWidth <= 970) {
        setStrokeWidth(86);
        setStrokeMarginLeft(419);
        }
        if (screenWidth <= 800) {
          setStrokeWidth(75);
          setStrokeMarginLeft(344);
        }
        break;
    }
  };

  const handleOnMouseLeave = () => {
    setIsHover(false)
    if (pathname === "/") {
        if (screenWidth > 1230) {
          setStrokeWidth(120);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 1230) {
          setStrokeWidth(91);
          setStrokeMarginLeft(0);
        }
        if (screenWidth <= 970) {
          setStrokeWidth(73);
          setStrokeMarginLeft(0);
        }
    }
  };

  const handleSideMenuOpen = () => {
    setIsOpenSideMenu(!isOpenSideMenu)
    if (isOpenSideMenu) {
      setSideMenuMargin(270) //Оно не успевает поменять состояние у isOpenSideMenu, так что это небольшой костыль
    }
    else {
      setSideMenuMargin(0)
    }
  }

  return (
    <>
      <div className="Header">
        <Image src={Logo} className="logo" alt="TMT" />
        <div>
          <div className="nav">
            <Link
              href={""}
              className="nav-link"
              onMouseEnter={() => handleOnMouseEnter("main")}
              onMouseLeave={() => handleOnMouseLeave()}
            >
              главная
            </Link>
            <Link
              href={""}
              className="nav-link"
              onMouseEnter={() => handleOnMouseEnter("uslugi")}
              onMouseLeave={() => handleOnMouseLeave()}
            >
              услуги
            </Link>
            <Link
              href={""}
              className="nav-link"
              onMouseEnter={() => handleOnMouseEnter("consult")}
              onMouseLeave={() => handleOnMouseLeave()}
            >
              получить консультацию
            </Link>
            <Link
              href={""}
              className="nav-link"
              onMouseEnter={() => handleOnMouseEnter("contacts")}
              onMouseLeave={() => handleOnMouseLeave()}
            >
              контакты
            </Link>
          </div>
          <motion.div
            animate={{
              width: strokeWidth,
              marginLeft: strokeMarginLeft,
            }}
            transition={{ duration: 0.3 }}
            className="stroke"
          ></motion.div>
        </div>

        <div className="contacts">
          <Link href="/phone" onClick={() => router.back()}>
            <Image src={Phone} className="contact" alt="TMT" />
          </Link>
          <Link href="/email" onClick={() => router.back()}>
            <Image src={Email} className="contact" alt="TMT" />
          </Link>
        </div>
            <Image src={Burger} className="burger" alt="TMT" onClick={() => handleSideMenuOpen()} />
      </div>
      <motion.div 
      className="side_menu"
      animate={{
        marginRight: -sideMenuMargin
      }}
      transition={{ duration: 0.3 }}
      >
      <Image src={Close} alt="x" className="side_menu_close" onClick={() => handleSideMenuOpen()} />
          <div className="side_menu_nav">
            <Link
              href={""}
              className="side_menu_nav-link"
            >
              главная
            </Link>
            <Link
              href={""}
              className="side_menu_nav-link"
            >
              услуги
            </Link>
            <Link
              href={""}
              className="side_menu_nav-link"
            >
              получить консультацию
            </Link>
            <Link
              href={""}
              className="side_menu_nav-link"
            >
              контакты
            </Link>
          </div>
      </motion.div>
      <div className="backround" style={{display: `${isOpenSideMenu ? "block" : "none"}`}}>
      </div>
    </>
  );
};

export default Header;
