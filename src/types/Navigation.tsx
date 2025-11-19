// Lightweight navigation helper that stores a navigate function
// and emits custom events to coordinate fade animations.

export class Navigation {
	private static _navigate: ((route: string) => void) | null = null;

	static register(navigateFn: (route: string) => void) {
		this._navigate = navigateFn;
	}

	static To(route: string) {
		// Tell page elements to start fade-out
		window.dispatchEvent(new CustomEvent('nav:start'));

		// Wait for animation to finish before navigating. Keep this in sync with CSS transition duration.
		const delay = 100; // ms — keep in sync with CSS
		const normalized = route.startsWith('/') ? route : `/${route}`;
		setTimeout(() => {
			if (this._navigate) {
				this._navigate(normalized);
			} else {
				console.warn('Navigation: navigate function not registered.');
				// Fallback: change location (causes full reload)
				window.location.pathname = normalized;
			}
		}, delay);
	}
}
