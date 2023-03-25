import { useState, useEffect, useCallback } from 'react';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	const handleResize = useCallback(() => {
		const windowWidth = window && window.innerWidth;
		console.log('windowWidth', windowWidth);
		if (windowWidth) {
			setIsMobile(Boolean(windowWidth < 706));
		}
	}, [isMobile]);
	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return isMobile;
};
