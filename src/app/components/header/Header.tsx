"use client";

import React from "react";
import Logo from "public/Logo.svg";
import Phone from "public/Phone.svg";
import Email from "public/Email.svg";
import Image from "next/image";
import Link from "next/link";
import "./Header.scss";
import { useRouter } from "next/navigation";


const Header = () => {
    const router = useRouter()
  return (
    <>
      <div className="Header">
        <Image src={Logo} className="logo" alt="TMT" />

        <div className="nav">
          <Link href={""} className="nav-link">
            главная
          </Link>
          <Link href={""} className="nav-link">
            услуги
          </Link>
          <Link href={""} className="nav-link">
            получить консультацию
          </Link>
          <Link href={""} className="nav-link">
            контакты
          </Link>
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
