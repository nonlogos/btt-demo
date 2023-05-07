import styled from 'styled-components';
import Image from 'next/legacy/image';
import Head from 'next/head';

import { HeroBanner, PageTitle, TwoColumnLayout, Schedule, Testimonials, PreEnrolling, Text } from '../../components';
import { homeText } from '../../siteContent';
import kidsBoyImage from '../../public/kids_boy.jpg';
import kidsBoyImageTwo from '../../public/kids_boy_2.jpg';
import kidsGirlImage from '../../public/kids_girl.jpg';
import giImage from '../../public/roll_3.jpg';

const {
	heroBanner: { buttonOne, buttonTwo, disclaimer },
} = homeText;

export default function Kids() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Kids</title>
				<meta name="description" content="BTT Lago Vista Adults Program" />
			</Head>
			<HeroBanner
				bkgdImage="group_kids"
				title="A PATH TO A MORE CONFIDENT LIFE"
				bodyText="Empower your child with the skills of self-defense, discipline, and impenetrable confidence."
				disclaimer={disclaimer}
			/>
			<PageTitle title="KIDS ACADEMY">
				<Text>6-12 yrs (13+ will be included in adult classes)</Text>
				<Text>Gi, No-Gi, and Private Instruction Available</Text>
			</PageTitle>

			<TwoColumnLayout
				Image={() => (
					<Image
						src={kidsBoyImage}
						alt="Boy winning metal with Isreal by his side"
						placeholder="blur"
						layout="fill"
						objectFit="cover"
					/>
				)}
				title="MORE THAN JUST SELF- DEFENSE"
				contentRight
			>
				<Text>The benefits of Brazilian Jiu-Jitsu go well beyond self-defense.</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image
						src={kidsGirlImage}
						alt="Girl training with Isreal"
						placeholder="blur"
						layout="fill"
						objectFit="cover"
					/>
				)}
				title="ANTI-BULLYING"
			>
				<Text>
					Bullying is a serious problem, and BJJ is an ideal way to empower your child to stand up for and protect
					themselves if and when needed.
				</Text>
				<Text>
					Kiddos will learn valuable self-defense techniques that will help them develop a strong, confident mindset
					along with the tools they need to nip bullying in the bud.
				</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => <Image src={giImage} alt="Boys rolling" placeholder="blur" layout="fill" objectFit="cover" />}
				title="AGE GROUPS"
				contentRight
			>
				<Text>
					Our Kids Academy classes are divided by age groups 6-10 and 9-12 years old, allowing children to learn and
					grow with peers of similar age.
				</Text>
				<Text>
					Beginner-friendly and supportive, our more advanced students assist and encourage those new to the program.
				</Text>
				<Text>We promote respect and do not tolerate negative language.</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image
						src={kidsBoyImageTwo}
						alt="Boy training with Isreal"
						placeholder="blur"
						layout="fill"
						objectFit="cover"
					/>
				)}
				title="PRIVATE LESSONS"
				subtitle="Available upon request"
			>
				<Text>Private lessons are offered to both members and non-members and available upon request.</Text>
			</TwoColumnLayout>
			<Schedule bkgdImage />
			{/* <Testimonials /> */}
			<PreEnrolling />
		</div>
	);
}
