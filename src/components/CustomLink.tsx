import { useResolvedPath } from "react-router-dom";
import { Navigation } from "types/Navigation";

//A Component that is just a wrapper for a link that uintegrates with the site's custom navigation

interface CustomLinkProps {
	to?: string;
	children?: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to:string, callBack?: () => void) => {
		e.preventDefault();
		if (callBack) callBack();
		Navigation.To(to)
	};

const CustomLink: React.FC<CustomLinkProps> = ({
	to = '',
	children = '',
	onClick,
	className = '',
}) => {
	return (
		<a
			href={Navigation.GetHashPath(to)}
			className={className}
			onClick={(e) => handleLinkClick(e, to, onClick)}
		>
			{children}
		</a>
	);
};

export default CustomLink;
