import React, { JSX, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const defaultNavItems: { id: string; label: string }[] = [
	{ id: '', label: 'Home' },
	{ id: 'projects', label: 'Projects' },
	//{ id: 'resume', label: 'Resume' },
	//{ id: 'background', label: 'Background' },
	//{ id: 'contact', label: 'Contact' },
];

type NavbarProps = {
	logo?: string;
	navItems?: { id: string; label: string }[];
};

export default function Navbar({ logo = 'Your Name', navItems = defaultNavItems }: NavbarProps): JSX.Element {
const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState<string>('');

	//useEffect(() => {
	//    const onScroll = () => {
	//        let current = '';
	//        navItems.forEach(item => {
	//            const el = document.getElementById(item.id);
	//            if (!el) return;
	//            const sectionTop = el.offsetTop;
	//            if (window.pageYOffset >= sectionTop - 200) {
	//                current = item.id;
	//            }
	//        });
	//        setActive(current);
	//    };

	//    window.addEventListener('scroll', onScroll, { passive: true });
	//    onScroll();
	//    return () => window.removeEventListener('scroll', onScroll);
	//}, []);

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		//e.preventDefault();
		setIsOpen(false);
		setActive(id);

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
							<Link
								to={`/${item.id}`}
								className={`nav-link${active === item.id ? ' active' : ''}`}
								onClick={(e) => handleLinkClick(e, item.id)}
							>
								{item.label}
							</Link>
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
