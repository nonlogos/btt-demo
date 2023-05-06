import Image from 'next/legacy/image';
import Head from 'next/head';

import {
	HeroBanner,
	PageTitle,
	TwoColumnLayout,
	Schedule,
	Testimonials,
	PreEnrolling,
	Text,
	WhyUs,
} from '../../components';
import { homeText } from '../../siteContent';
import noGiImage from '../../public/no_gi.jpg';
import giImage from '../../public/roll_4.jpg';
import giImageTwo from '../../public/roll_2.jpg';

const {
	heroBanner: { buttonOne, buttonTwo, disclaimer },
} = homeText;

export default function Adults() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Adults</title>
				<meta name="description" content="BTT Lago Vista Adults Program" />
			</Head>
			<HeroBanner
				bkgdImage="roll_5"
				title="Build confidence. Gain Strength. Get after it"
				bodyText="Empower yourself at the Ultimate Brazilian Jiu-Jitsu Training Destination in Lago Vista."
				disclaimer={disclaimer}
			/>
			<PageTitle title="Adult Co-ed Classes">
				<Text>(Ages 13+ will be included in adult classes)</Text>
				<Text>
					Because who doesn&apos;t love a good chokehold in their daily routine? In all seriousness, with Brazilian
					Jiu-Jitsu, you&apos;ll take control of real-world situations. Designed for self-defense, it&apos;s perfect for
					anyone looking to master the art of taking down an opponent, no matter their size.
				</Text>
			</PageTitle>

			<TwoColumnLayout
				Image={() => <Image src={giImage} alt="Gi training" placeholder="blur" layout="fill" objectFit="cover" />}
				title="BRAZILIAN JIU-JITSU (GI)"
				subtitle="Adult Co-Ed"
				contentRight
			>
				<Text>
					Grappling is the name of the game in Brazilian Jiu-Jitsu! By focusing on ground-level fighting techniques and
					utilizing a range of holds, throws, and submission techniques, BJJ gives you the skills and confidence you
					need to defend yourself without causing unnecessary harm.
				</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => <Image src={noGiImage} alt="No gi training" placeholder="blur" layout="fill" objectFit="cover" />}
				title="BRAZILIAN JIU-JITSU (NO-GI)"
				subtitle="Adult Co-Ed"
			>
				<Text>
					No-Gi jiu-jitsu is a style of BJJ that is practiced without the traditional gi (or kimono). Instead of the gi,
					practitioners wear rash guards, shorts, and spats.
				</Text>
				<Text>
					The techniques used in no-gi jiu-jitsu are similar to traditional jiu-jitsu, but the pace is faster, and the
					submissions are more often readily applied in real-life situations.
				</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image src={giImageTwo} alt="Private Lessons" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="PRIVATE LESSONS"
				subtitle="Available upon request"
				contentRight
			>
				<Text>Private lessons are offered to both members and non-members and available upon request.</Text>
			</TwoColumnLayout>
			<WhyUs />
			<Schedule bkgdImage />
			<Testimonials />
			<PreEnrolling />
		</div>
	);
}
