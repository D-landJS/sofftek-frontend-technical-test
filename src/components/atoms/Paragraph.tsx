import './Paragraph.scss';

interface IParagraph {
	children: string;
	color?: string;
	variant?: string;
	weight?: string;
}

const Paragraph = (paragraph: IParagraph) => {
	let classNames = 'paragraph';

	if (paragraph.color) {
		classNames += ` ${paragraph.color}`;
	}

	if (paragraph.variant) {
		classNames += ` ${paragraph.variant}`;
	}

	if (paragraph.weight) {
		classNames += ` ${paragraph.weight}`;
	}

	return <p className={classNames}>{paragraph.children}</p>;
};

export default Paragraph;
