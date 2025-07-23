import "./style.css";

export default function Main() {
  return (
    <main>
      <div className="takisawa"></div>
      <h2 className="title">О КОМПАНИИ</h2>
      <div className="line"></div>
      <p className="text">
        Компания ТMT (TАКАСАВА МАШИН ТУЛ), основанная 14 декабря 2017 года под
        руководством и учредительством Смолина Александра Леонидовича,
        специализируется на машиностроительной отрасли, в частности в области
        станкостроения. Основным направлением деятельности ООО “ТМТ” является
        ремонт машин и оборудования, включая поставку, наладку, модернизацию и
        обслуживание металлообрабатывающих станков различных групп, таких как
        токарные, фрезерные и шлифовальные. Компания обладает аккредитацией
        сервисного партнёра тайваньских и корейских производителей станочного
        оборудования брендов
        <a className="link" href="https://kafo.su/">
          KAFO,
        </a>
        <a
          className="link"
          href="https://www.directindustry.com.ru/prod/hnk-machine-tool-37396.html"
        >
          HNK,
        </a>
        <a className="link" href="http://www.hanmachine.ru/">
          HANKOOK,
        </a>
        <a
          className="link"
          href="https://www.stankisti.ru/product-category/rastochnoe-oborudovanie/femco-tajvan/"
        >
          FEMCO
        </a>
        и
        <a className="link" href="https://ru.altado.si/">
          ALTADO,
        </a>
        что позволяет ей обеспечивать высокий уровень сервиса и технической
        поддержки своим клиентам.
      </p>
    </main>
  );
}
