import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar'; // Add this import
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
//import { DataHandler } from './datahandler/DataHandler';

import { useLocation } from 'react-router-dom';

const RouteChangeListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Runs on every route change
    console.log('Navigated to:', location.pathname);

    // Common use cases:
    // 1. Scroll to top
    window.scrollTo(0, 0);

    // 2. Analytics tracking
    // analytics.pageview(location.pathname);

    // 3. Close mobile menu
    // closeMobileMenu();

  }, [location]);

  return <>{children}</>;
};

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
