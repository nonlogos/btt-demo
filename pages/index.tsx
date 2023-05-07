import styled from 'styled-components';
import Image from 'next/legacy/image';
import Head from 'next/head';

import { TaglineBanner, TwoColumnLayout, Schedule, Testimonials, PreEnrolling, Text } from '../components';
import { HomeHeroBanner } from '../components/home';
import { homeText } from '../siteContent';
import adultsProgramImage from '../public/roll_feature.jpg';
import kidsProgramImage from '../public/kids_girl.jpg';
import bioImage from '../public/bio.jpg';

const {
	newsBanner,
	heroBanner: { title, bodyText, buttonOne, buttonTwo, disclaimer },
	taglineBanner: { title: taglineTitle, bodyText: taglineBodyText },
} = homeText;

const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr;
`;

export default function Home() {
	return (
		<div>
			<Head>
				<title>BTT Lago Vista | Home</title>
				<meta name="description" content="BTT Lago Vista" />
			</Head>
			<HomeHeroBanner title={title} bodyText={bodyText} disclaimer={disclaimer} />
			<TaglineBanner title={taglineTitle} bodyText={taglineBodyText} />
			<TwoColumnLayout
				Image={() => (
					<Image src={adultsProgramImage} alt="Adult Programs" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="Adult Programs"
				subtitle="Rise to the Challenge"
				actionText="Learn more"
				actionLink="/programs/adults"
				contentRight
			>
				<Text>
					Learn self-defense skills and boost your confidence as you train among champions. Whether you&apos;re seasoned
					fighter training for a competition or a beginner looking to get fit, we&apos;ll help you reach your goals no
					matter your age or skill level.
				</Text>
				<Text>Welcome to the Team!</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image src={kidsProgramImage} alt="Kids Academy" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="Kids Academy"
				subtitle="The path to a healthier, confident, and more disciplined life"
				actionText="Get on the path!"
				actionLink="/programs/kids"
			>
				<Text>
					At our academy, kids will learn respect, self-defense, and make lasting connections with their fellow
					students.
				</Text>
				<Text>Join us at BTT Lago and watch your kiddo thrive on and off the mat.</Text>
			</TwoColumnLayout>
			<TwoColumnLayout
				Image={() => (
					<Image src={bioImage} alt="Professor Israel Davila" placeholder="blur" layout="fill" objectFit="cover" />
				)}
				title="Instructor"
				subtitle="Professor Israel Davila, Owner and Head Coach Brazilian Top Team Lago Vista"
				actionText="Meet Israel"
				actionLink="/about"
				contentRight
			>
				<Text>
					A member of BTT since 2016, Israel is a multiple-time IBJJF champion and joined the ranks of black belt in
					2021, solidifying his place as a master of the art.
				</Text>
				<Text>
					Whether you&apos;re a seasoned BJJ veteran or just starting out, Israel&apos;s knowledge, experience, and
					methods will take your skills to the next level.
				</Text>
			</TwoColumnLayout>

			<Schedule bkgdImage />
			{/* <Testimonials /> */}
			<PreEnrolling />
		</div>
	);
}
