import { Oswald, Roboto } from '@next/font/google';

export const oswald = Oswald({ subsets: ['latin'], display: 'swap' });
export const roboto = Roboto({
	weight: ['100', '300', '400', '700'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
	display: 'swap',
});
