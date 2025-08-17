import React from "react";
import "./Style.scss";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className="contacts-title">КОНТАКТЫ</h1>

      <div className="contacts-list">
        <p className="list-contact">
          <span>Номер телефона: </span>+7 985 (467) 16-29
        </p>
        <p className="list-contact">
          <span>Электронная почта: </span>ooo_tmt@mail.ru
        </p>
        <p className="list-contact">
          <span>Юридический адрес: </span>129344, г. Москва, вн. тер. г.
          муниципальный округ Бабушкинский, ул. Верхоянская, д. 18, к. 2, помещ.
          2П
        </p>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }} className="map">
        <a
          href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Москва
        </a>
        <a
          href="https://yandex.ru/maps/213/moscow/house/verkhoyanskaya_ulitsa_18k2/Z04YcAFjS0cCQFtvfXR0dnRjZQ==/?ll=37.663225%2C55.857801&utm_medium=mapframe&utm_source=maps&z=17"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Верхоянская улица, 18к2 на карте Москвы, ближайшее метро Свиблово —
          Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.663225%2C55.857801&mode=whatshere&whatshere%5Bpoint%5D=37.663225%2C55.857801&whatshere%5Bzoom%5D=17&z=17"
          width="1078"
          height="660"
          className="imap"
          allowFullScreen={true}
          style={{ position: "relative", border: "none" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
