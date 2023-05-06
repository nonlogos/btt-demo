import { useState, useEffect, useCallback } from 'react';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	const handleResize = useCallback(() => {
		const windowWidth = window && window.innerWidth;
		if (windowWidth) {
			setIsMobile(Boolean(windowWidth < 706));
		}
	}, []);
	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);
	return isMobile;
};
