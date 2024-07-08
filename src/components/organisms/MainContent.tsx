import bg from '../../assets/bg.png';
import './MainContent.scss';

const MainContent = () => {
	return (
		<main className="main">
			<section>
				<img src={bg} alt="Descripción de la imagen" />
			</section>
			<section>
				<span>Seguro Salud Flexible</span>
				<h2>Seguro Salud Flexible</h2>
				<h3>
					Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
					asesoría. 100% online.
				</h3>
			</section>
		</main>
	);
};

export default MainContent;
