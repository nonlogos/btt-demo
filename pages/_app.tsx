import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
