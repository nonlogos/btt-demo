import styled from 'styled-components';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

import { HeroBanner, PageTitle, header, Testimonials, PreEnrolling, Text, EvenGrid, Button } from '../../components';
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

export default function Schedules() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Schedule</title>
				<meta name="description" content="BTT Lago Vista About" />
			</Head>
			<HeroBanner
				bkgdImage="group_profile"
				title="AWAKEN YOUR INNER CHAMPION AT BTT LAGO VISTA"
				bodyText="Build Confidence. Gain Strength. Take Charge."
				buttonOne={buttonOne}
				disclaimer={disclaimer}
			/>
			<PageTitle title="Class Schedules" />
			<Container>
				<div className="maonrails-schedule" attr-gym="ArEjW" attr-schedule="all" attr-program="LO0qN" />
			</Container>
			<Testimonials />
			<PreEnrolling />
			<Script src="https://gymdesk.com/js/widgets.js"></Script>
		</div>
	);
}
