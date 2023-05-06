import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import {
	HeroBanner,
	PageTitle,
	header,
	Schedule,
	Testimonials,
	PreEnrolling,
	Text,
	EvenGrid,
	Button,
} from '../../components';
import { homeText } from '../../siteContent';

const {
	heroBanner: { buttonOne, buttonTwo, disclaimer },
} = homeText;

const Container = styled.section`
	margin-bottom: 3rem;
`;

const ProgramContainer = styled.div`
	background-color: var(--bkgd-section-color);
	padding: var(--sp-5x);
	margin: 0 var(--sp-2x) var(--sp-2x);
	@media (min-width: 560px) {
		margin: 0 var(--sp-2x);
		margin-right: var(--sp-2x);
		&:last-child {
			margin-left: 0;
		}
	}
	@media (min-width: 1020px) {
		margin: 0;
		margin-right: var(--sp-2x);
		&:last-child {
			margin-right: 0;
		}
	}
`;

export default function Programs() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Programs</title>
				<meta name="description" content="BTT Lago Vista About" />
			</Head>
			<HeroBanner
				bkgdImage="roll_3"
				title="Build confidence. Gain Strength. Get after it"
				bodyText="Empower yourself at the Ultimate Brazilian Jiu-Jitsu Training Destination in Lago Vista."
				disclaimer={disclaimer}
			/>
			<PageTitle title="Programs" />
			<Container>
				<EvenGrid minWidth="280px" alignItems="start">
					<ProgramContainer>
						<header.H2>Adults Co-ed Programs</header.H2>
						<Text>(Ages 13+ will be included in adult classes)</Text>
						<Text>
							Because who doesn&apos;t love a good chokehold in their daily routine? In all seriousness, with Brazilian
							Jiu-Jitsu, you&apos;ll take control of real-world situations. Designed for self-defense, it&apos;s perfect
							for anyone looking to master the art of taking down an opponent, no matter their size.
						</Text>
						<Button>
							<Link href="/programs/adults">Learn more</Link>
						</Button>
					</ProgramContainer>
					<ProgramContainer>
						<header.H2>Kids Academy</header.H2>
						<Text>6-10 yrs & 9-12 yrs (13+ will be included in adult classes)</Text>
						<Text>Gi, No-Gi, and Private Instruction Available</Text>
						<Button>
							<Link href="/programs/kids">Learn more</Link>
						</Button>
					</ProgramContainer>
				</EvenGrid>
			</Container>
			<Schedule bkgdImage />
			<Testimonials />
			<PreEnrolling />
		</div>
	);
}
