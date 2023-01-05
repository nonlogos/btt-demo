import styled from 'styled-components';
import Head from 'next/head';

import { MainHeader } from '../components';
import { HeroBanner, ComingSoon, IntroSection, BioSection, ContactUs, Test } from '../components/home';

const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr;
`;

const Footer = styled.footer`
	position: relative;
	display: flex;
	min-height: 15rem;
	margin: 0;
	padding: 0;
	background: var(--font-color);
	justify-content: center;
	font-size: 0.8rem;
	color: var(--bkgd-color);
`;

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="BTT Lago Vista" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"></meta>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Open+Sans:wght@800&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Main>
				<MainHeader />
				<HeroBanner />
				{/* <ComingSoon /> */}
				<Test />
				<IntroSection />
				<BioSection />
				<ContactUs />
				<Footer>
					<p>© BTT Lago Vista. 2022. We love our users!</p>
				</Footer>
			</Main>
		</div>
	);
}
