import LogoAtom from '../atoms/Logo';
import logo from '../../assets/logo.svg';
import './Navbar.scss';
import Paragraph from '../atoms/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
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
	);
};

export default Navbar;
