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
				title="Y'ALL COME BACK NOW, YA HEAR?"
				bodyText="BRAZILIAN TOP TEAM LAGO VISTA"
				disclaimer={disclaimer}
			/>
			<PageTitle title="CONTACT" />
			<ContactSources />
			<Map />
			{/* <Testimonials /> */}
			<PreEnrolling />
		</div>
	);
}
