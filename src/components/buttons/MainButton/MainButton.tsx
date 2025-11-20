import React from 'react';
import './MainButton.css';

interface MainButtonProps {
	children?: React.ReactNode;
	onClick?: () => void;
	href?: string;
	className?: string;
}

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, callBack?: () => void) => {
		e.preventDefault();
		if (callBack) callBack();
	};

const MainButton: React.FC<MainButtonProps> = ({
	children = 'Click Me',
	onClick,
	//  disabled = false,
	href = '',
	className = '',
}) => {
	return (
		<a
			href={href}
			className={`button ${className}`}
			onClick={(e) => handleLinkClick(e, onClick)}

		//  disabled={disabled}
		>
			<span>{children}</span>
		</a>
	);
};

export default MainButton;
