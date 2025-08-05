'use client'

import React from 'react'
import Image from 'next/image'
import Logo from 'public/LogoFuta.svg'
import UpArrow from 'public/UpArrow.svg'
import "./Footer.scss"

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className='Footer'>
      <div className="Footer_wrapper">
      <Image src={Logo} alt='TMT' className='logoFuta'></Image>
      <ul className='Footer__list'>
        <li>Контакты</li>
        <li className='Footer__list_phone'>+7 985 (467) 16-29</li>
        <li className='Footer__list_email'>ooo_tmt@mail.ru</li>
      </ul>

      <ul className='Footer__list'>
        <li>Адрес</li>
        <li className='Footer__list_address'>129344, г. Москва, вн. тер. г. муниципальный округ Бабушкинский, ул. Верхоянская, д. 18, к. 2, помещ. 2П</li>
      </ul>
      <Image src={UpArrow} alt='ToTop' className='ToTop' onClick={() => scrollToTop()}></Image>
      </div>
      <p className='Footer_bottom-sign'>OOO “TMT” 2017-2025 - ремонт машин и оборудования</p>
    </div>
  )
}

export default Footer