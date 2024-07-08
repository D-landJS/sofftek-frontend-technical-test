import './Typography.scss';

interface ITypography {
	children: string;
	color?: string;
	variant?: string;
	weight?: string;
}
const Typography = ({ variant, color, children, weight }: ITypography) => {
	const classNames = `typography ${variant ?? ''} ${color ?? ''} ${
		weight ?? ''
	}`;

	return <div className={classNames}>{children}</div>;
};

export default Typography;
