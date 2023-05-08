import Head from 'next/head';

import { HeroBanner, PageTitle, PreEnrolling, Map } from '../../components';
import { ContactSources } from '../../components/contact';
import { homeText } from '../../siteContent';
import bannerImage from '../../public/roll_2.jpg';

const {
	heroBanner: { disclaimer },
} = homeText;

export default function Contact() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Contact</title>
				<meta name="description" content="BTT Lago Vista Contact" />
			</Head>
			<HeroBanner
				bkgdImage={bannerImage.src}
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
