import Image from 'next/legacy/image';
import Head from 'next/head';

import { HeroBanner, PageTitle, TwoColumnLayout, Schedule, Testimonials, PreEnrolling, Text } from '../../components';
import { homeText } from '../../siteContent';
import actionsImage from '../../public/roll_5.jpg';
import champImage from '../../public/champ.jpg';
import bioImage from '../../public/bio_2.jpg';
import bannerImage from '../../public/roll_feature.jpg';

const {
	heroBanner: { disclaimer },
} = homeText;

export default function About() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | About</title>
				<meta name="description" content="BTT Lago Vista About" />
			</Head>
			<HeroBanner
				bkgdImage={bannerImage.src}
				title="TRAIN AT THE ULTIMATE BRAZILIAN JIU-JITSU ACADEMY IN LAGO VISTA"
				bodyText="Led by experienced black belt & multiple-time IBJJF champion, Israel Davila"
				disclaimer={disclaimer}
			/>
			<PageTitle title="MEET PROFESSOR ISRAEL DAVILA" />
			<TwoColumnLayout
				Image={() => (
					<Image src={bioImage} alt="Professor Isreal Davila" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="MULTIPLE-TIME IBJJF CHAMPION"
				subtitle="Professor Israel Davila, Owner and Lead Instructor Brazilian Top Team Lago Vista"
				contentRight
			>
				<Text>With over a decade of BJJ training under his belt, Israel is a formidable force on the mat.</Text>
				<Text>
					He&apos;s been with the Brazilian Top Team family since 2016, and his skills as an IBJJF competitor and
					multiple-time IBJJF champion speak for themselves.
				</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image src={actionsImage} alt="Israel in action" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="MASTER OF THE ART"
			>
				<Text>
					In 2021, he was awarded the rank of black belt by IBJJF Pan Am champion Professor Ruy Frade, solidifying his
					place as a master of the art.
				</Text>
				<Text>
					Whether you&apos;re a seasoned BJJ veteran or just starting out, Israel has the knowledge and experience to
					take your skills to the next level.
				</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image src={champImage} alt="Israel winning competition" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="CHAMPION, ON AND OFF THE MAT"
				contentRight
			>
				<Text>
					Israel is like the BFF of BJJ instructors and is known as one of the most friendly and supportive folks in the
					game.
				</Text>
				<Text>
					He&apos;s got a way with people that&apos;ll make you feel like the most important person on the mat. Whether
					you&apos;re a brand new white belt or a wise old black belt, Israel&apos;s got a special talent for making you
					feel heard and respected.
				</Text>
				<Text>You&apos;re guaranteed to have a good laugh or two in his classes (or he&apos;ll do 10 sprawls!)</Text>
			</TwoColumnLayout>

			<Schedule bkgdImage />
			{/* <Testimonials /> */}
			<PreEnrolling />
		</div>
	);
}
