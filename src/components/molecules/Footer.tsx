import LogoAtom from '../atoms/Logo';
import logo from '../../assets/logo_black.svg';
import './Footer.scss';
import Paragraph from '../atoms/Paragraph';

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer__container">
				<div className="footer__logo">
					<LogoAtom src={logo} alt="Logo" />
				</div>
				<div className="footer__info">
					<Paragraph variant="small" color="primary" weight="fw-400">
						© 2023 RIMAC Seguros y Reaseguros.
					</Paragraph>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
