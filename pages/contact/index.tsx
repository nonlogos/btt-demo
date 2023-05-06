import Head from 'next/head';

import { HeroBanner, PageTitle, Testimonials, PreEnrolling, Map } from '../../components';
import { ContactSources } from '../../components/contact';
import { homeText } from '../../siteContent';

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
				bkgdImage="roll_2"
				title="CONTACT"
				bodyText="BRAZILIAN TOP TEAM LAGO VISTA"
				buttonOne={buttonOne}
				buttonTwo={buttonTwo}
				disclaimer={disclaimer}
			/>
			<PageTitle title="Y'ALL COME BACK NOW, YA HEAR?" />
			<ContactSources />
			<Map />
			<Testimonials />
			<PreEnrolling />
		</div>
	);
}
