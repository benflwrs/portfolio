import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar'; // Add this import
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
//import { DataHandler } from './datahandler/DataHandler';

import { useLocation } from 'react-router-dom';
import { Navigation } from './types/Navigation';
import ProjectDetail from 'components/pages/ProjectDetail';

const RouteChangeListener: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Runs on every route change
    console.log('Navigated to:', location.pathname);

    // Common use cases:
    // 1. Scroll to top
    window.scrollTo(0, 0);

		// Notify that navigation completed so elements can fade in
		window.dispatchEvent(new CustomEvent('nav:complete'));

    // 2. Analytics tracking
    // analytics.pageview(location.pathname);

    // 3. Close mobile menu
    // closeMobileMenu();

  }, [location]);

  return <>{children}</>;
};

function App() {

	// Global listeners to add/remove the fade classes on elements with `.dyn-element`.
	useEffect(() => {
		const handleStart = () => {
			document.querySelectorAll('.dyn-element').forEach((el) => {
				el.classList.add('fade-out');
			});
		};

		const handleComplete = () => {
			document.querySelectorAll('.dyn-element').forEach((el) => {
				el.classList.remove('fade-out');
			});
		};

		window.addEventListener('nav:start', handleStart as EventListener);
		window.addEventListener('nav:complete', handleComplete as EventListener);

		return () => {
			window.removeEventListener('nav:start', handleStart as EventListener);
			window.removeEventListener('nav:complete', handleComplete as EventListener);
		};
	}, []);

	// Component that registers react-router's navigate into our Navigation helper
	const NavigationRegistrar: React.FC = () => {
		const navigate = useNavigate();
		useEffect(() => {
			Navigation.register((route: string) => navigate(route));
		}, [navigate]);
		return null;
	};

	return (
		<div className="App">
			<HashRouter >
				<NavigationRegistrar />
				<Navbar
					logo="Benjamin Nicolas"
					navItems={[
						{ id: '', label: 'Home' },
						{ id: 'projects', label: 'Projects' },
						{ id: 'vfx', label: 'VFX' },
						{ id: 'resume', label: 'Resume' },
					]}
				/>
				<RouteChangeListener>
					<main className='dyn-element'>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/projects/:projectId" element={<ProjectDetail />} />
						</Routes>
					</main>
				</RouteChangeListener>
			</HashRouter>
		</div>
	);
}

export default App;
