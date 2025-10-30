import React from 'react';
import logo from './logo.svg';
import '../stylesheets/Components.css';


function NavBar()
{
	return (
    <nav className="navbar">
		<div className="container">
			<div className="navbar-brand">
				<a className='navbar-item'>benflwrs</a>
			</div>
			<div className="navbar-menu">
				<a className='navbar-item'>About</a>
				<a className='navbar-item'>Projects</a>
			</div>
		</div>
    </nav>
  );
}

export default NavBar;
