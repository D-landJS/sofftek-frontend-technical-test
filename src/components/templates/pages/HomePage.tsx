import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoAtom from '../../atoms/Logo';
import Paragraph from '../../atoms/Paragraph';
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/logo.svg';
import logoBlack from '../../../assets/logo_black.svg';
import bg from '../../../assets/bg.png';
import bgLeft from '../../../assets/blur-asset-left.png';
import bgRight from '../../../assets/blur-asset-right.png';
import './HomePage.scss';
import Typography from '../../atoms/Typography';

const HomePage = () => {
	return (
		<>
			<header className="header">
				<nav className="navbar">
					<div className="wrapper">
						<div className="navbar__logo">
							<LogoAtom src={logo} alt="Logo" />
						</div>
						<div className="navbar__info">
							<Paragraph variant="small" weight="fw-500">
								¡Compra por este medio!
							</Paragraph>
							<div className="navbar__info__contact">
								<FontAwesomeIcon icon={faPhone} size="xs" />
								<Paragraph variant="small" weight="fw-700">
									(01) 411 6001
								</Paragraph>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main className="main">
				<div className="wrapper">
					<section className="main__bg">
						<img src={bg} alt="Descripción de la imagen" />
					</section>
					<section className="main__content">
						<span className="main__content__tag">Seguro Salud Flexible</span>
						<section className="main__content__info">
							<Typography variant="h2" weight="fw-700">
								Creado para ti y tu familia
							</Typography>
							<Typography variant="h5" weight="fw-600">
								Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
								nuestra asesoría. 100% online.
							</Typography>
							<form>
								<div className="input__content">
									<div className="input__content--select">
										<select id="documentType" name="documentType">
											<option value="DNI">DNI</option>
											<option value="RUC">RUC </option>
										</select>
										<FontAwesomeIcon
											icon={faAngleDown}
											size="xs"
											className="i"
										/>
									</div>
									<div className="input__content--right">
										<input
											type="text"
											id="document"
											name="documentNumber"
											placeholder=" "
											maxLength={8}
										/>
										<label htmlFor="document" className="before">
											<div className="paragraph">Nro. de documento</div>
										</label>
									</div>
								</div>
							</form>
						</section>
					</section>
				</div>

				<img src={bgLeft} alt="background left" className="main__bg-left" />
				<img src={bgRight} alt="background left" className="main__bg-right" />
			</main>

			<footer className="footer">
				<div className="wrapper">
					<div className="footer__logo">
						<LogoAtom src={logoBlack} alt="Logo" />
					</div>
					<div className="footer__info">
						<Paragraph variant="small" color="primary" weight="fw-400">
							© 2023 RIMAC Seguros y Reaseguros.
						</Paragraph>
					</div>
				</div>
			</footer>
		</>
	);
};

export default HomePage;
