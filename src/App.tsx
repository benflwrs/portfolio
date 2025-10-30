import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; // Add this import

function App() {
	return (
		<div className="App">
			<NavBar
				name="BenFlwrs"
				links={[
					{ label: "Home", href: "#home" },
					{ label: "About", href: "#about" },
					{ label: "Projects", href: "#projects" },
					{ label: "Contact", href: "#contact" }
				]}
			/>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
