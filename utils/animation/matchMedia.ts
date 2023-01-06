const mobile = 435;
const xlDesktop = 1921;
export const mediaBreakpoints = {
	isDesktop: `(min-width: ${mobile}px) and (max-width: ${xlDesktop - 1}px) and (prefers-reduced-motion: no-preference)`,
	isMobile: `(max-width: ${mobile - 1}px) and (prefers-reduced-motion: no-preference)`,
	isXLDesktop: `(min-width: ${xlDesktop}px) and (prefers-reduced-motion: no-preference)`,
	reduceMotion: '(prefers-reduced-motion: reduce)',
};
