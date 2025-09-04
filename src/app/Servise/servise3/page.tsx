"use client"
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/pagination';
import "./servise3.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useWindowSize from "@/app/hooks/getWindowSize";

export default function ServisePage3() {

   const {width} = useWindowSize()
  return (
    <div className="servise-container2">
      <div className="servise_header3">
      {width > 700 ? 
      <h1 className="servise-title2">СТАНКО-РЕМОНТНОЕ ПРОИЗВОДСТВО </h1>
      :
      <></>}
      <div className="img-container2">
        <img
          src={"/Servise3_1.svg"}
          alt="Ремонт оборудования"
          className="servise-image2_1"
        />
        <img
          src={"/Servise3_2.svg"}
          alt="Ремонт оборудования"
          className="servise-image2_2"
        />
        <img
          src={"/Servise3_3.svg"}
          alt="Ремонт оборудования"
          className="servise-image2_3"
        />
      </div>
      <div className="img_container2_smol">
        <Swiper pagination={true} modules={[Pagination]} className="img_container2_smol">
          <SwiperSlide>
            <img
            src={"/Servise3_1.svg"}
            alt="Ремонт оборудования"
            className="servise-image2_1"
          />
          </SwiperSlide>
          <SwiperSlide>
            <img
            src={"/Servise3_2.svg"}
            alt="Ремонт оборудования"
            className="servise-image2_2"
          />
          </SwiperSlide>
          <SwiperSlide>
            <img
            src={"/Servise3_3.svg"}
            alt="Ремонт оборудования"
            className="servise-image2_3"
          />
          </SwiperSlide>
        </Swiper>
      </div>
          {width > 700 ? 
     <></>
      :
      <h1 className="servise-title2">СТАНКО-РЕМОНТНОЕ ПРОИЗВОДСТВО </h1>}
</div>
      <div className="servise-content2">
        <p>
          <br />
          Станко-ремонтное производство занимается восстановлением и ремонтом
          металлорежущих станков и другого станочного оборудования. Это включает
          в себя текущий и капитальный ремонт, замену изношенных деталей,
          восстановление геометрической точности, а также модернизацию
          электрооборудования и систем управления. Имея в своем штате
          квалифицированных специалистов по ремонту и техническому обслуживанию
          оборудования, OOO “ТМТ” оказывает высококачественные сервисные услуги.
        </p>
		<Link href="/getConsult">
          <button className="servise-btn2">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
		</Link>
      </div>
    </div>
  );
}
