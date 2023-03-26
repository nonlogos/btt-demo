import styled from 'styled-components';
import Head from 'next/head';

import { HeroBanner, PageTitle, Testimonials, PreEnrolling, Box, header, Map } from '../../components';
import { ContactSources } from '../../components/contact';
import { homeText } from '../../siteContent';
import About from '../about/index';

const {
	heroBanner: { title, bodyText, buttonOne, buttonTwo, disclaimer },
} = homeText;

export default function Contact() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Contact</title>
				<meta name="description" content="BTT Lago Vista Contact" />
			</Head>
			<HeroBanner
				bkgdImage="roll_5"
				title="CONTACT"
				subtitle="BRAZILIAN TOP TEAM LAGO VISTA"
				buttonOne={buttonOne}
				buttonTwo={buttonTwo}
				disclaimer={disclaimer}
			/>
			<PageTitle>Y&apos;ALL COME BACK NOW, YA HEAR?</PageTitle>
			<ContactSources />
			<Map />
			<Testimonials />
			<PreEnrolling />
		</div>
	);
}
