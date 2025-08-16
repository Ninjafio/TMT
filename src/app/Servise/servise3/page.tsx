import './servise3.scss';

export default function ServisePage3() {
	return (
		<div className="servise-container2">
			<h1 className="servise-title2">СТАНКО-РЕМОНТНОЕ ПРОИЗВОДСТВО  </h1>
			<div className='img-container2'>
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
				/></div>
			<div className="servise-content2">
				<p> <br/>
				Станко-ремонтное производство занимается восстановлением и ремонтом металлорежущих станков и другого станочного оборудования. Это включает в себя текущий и капитальный ремонт, замену изношенных деталей, восстановление геометрической точности, а также модернизацию электрооборудования и систем управления. Имея в своем штате квалифицированных специалистов по ремонту и техническому обслуживанию оборудования, OOO “ТМТ” оказывает высококачественные сервисные услуги.
				</p>
				<button className="servise-btn2" >ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
			</div>
		</div>
	);
}
