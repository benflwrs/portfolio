import React, { useState } from 'react'
import logo from './logo.svg';
import '../../App.css';
import './NavBar.css';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  name?: string;
  links?: NavLink[];
}

const NavBar: React.FC<NavbarProps> = ({
  name = "Your Name",
  links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          {name}
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
