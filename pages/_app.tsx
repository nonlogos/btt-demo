import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles';
import { PageLayout } from '../components';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"></meta>
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</>
	);
}
