import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar'; // Add this import
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar
					logo="Benjamin Nicolas"
					navItems={[
						{ id: '', label: 'Home' },
						{ id: 'projects', label: 'Projects' },
						{ id: 'resume', label: 'Resume' },
					]}
				/>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
