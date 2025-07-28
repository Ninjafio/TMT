"use client";

import React from "react";
import Logo from "public/Logo.svg";
import Phone from "public/Phone.svg";
import Email from "public/Email.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [strokeWidth, setStrokeWidth] = React.useState<number>(0);
  const [strokeMarginLeft, setStrokeMarginLeft] = React.useState<number>(0);

  useEffect(() => {
  if (pathname === "/") {
      setStrokeWidth(120);
      setStrokeMarginLeft(0);
  }
  }, [])


  const handleOnMouseEnter = (element: string) => {
    switch (element) {
      case "main":
      setStrokeWidth(120);
      setStrokeMarginLeft(0);
        break;
      case "uslugi":
      setStrokeWidth(100);
      setStrokeMarginLeft(153);
        console.log("aaa");
        break;
      case "consult":
      setStrokeWidth(363);
      setStrokeMarginLeft(290);
        console.log("aaa");
        break;
      case "contacts":
      setStrokeWidth(140);
      setStrokeMarginLeft(686);
        console.log("aaa");
        break;
    }
  };

  const handleOnMouseLeave = () => {
  if (pathname === "/") {
      setStrokeWidth(120);
      setStrokeMarginLeft(0);
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
            style={{
              backgroundColor: "#D1005E",
              height: "5px",
            }}
            animate={{
              width: strokeWidth,
              marginLeft: strokeMarginLeft,
            }}
            transition={{ duration: 0.3 }}
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
      </div>
    </>
  );
};

export default Header;
