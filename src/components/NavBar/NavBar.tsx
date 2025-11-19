import React, { JSX, useEffect, useState} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { Navigation } from '../../types/Navigation';

const defaultNavItems: { id: string; label: string }[] = [
	{ id: '', label: 'Home' },
	{ id: 'projects', label: 'Projects' },

];

type NavbarProps = {
	logo?: string;
	navItems?: { id: string; label: string }[];
};

export default function Navbar({ logo = 'Your Name', navItems = defaultNavItems }: NavbarProps): JSX.Element {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState<string>('');

	// Sync active state with current route on mount and when location changes
	useEffect(() => {
		const currentPath = location.pathname.slice(1); // Remove leading '/'
		setActive(currentPath);
	}, [location.pathname]);

	//const navigate = useNavigate();

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		setIsOpen(false);
		setActive(id);

		Navigation.To(id);

		//const target = document.getElementById(id);
		//if (target) {
		//	target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		//}
	};

	return (
		<nav>
			<div className="nav-container">
				<div className="logo">{logo}</div>
				<ul className={`nav-links ${isOpen ? 'active' : ''}`}>
					{navItems.map(item => (
						<li key={item.id}>
							<a
								//to={`/${item.id}`}
								href={`/${item.id}`}
								className={`nav-link${active === item.id ? ' active' : ''}`}
								onClick={(e) => handleLinkClick(e, item.id)}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className={`hamburger${isOpen ? ' active' : ''}`}
					role="button"
					aria-label="Toggle navigation"
					onClick={() => setIsOpen(prev => !prev)}
					onKeyDown={(e) => { if (e.key === 'Enter') setIsOpen(prev => !prev); }}
					tabIndex={0}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nav>
	);
}
