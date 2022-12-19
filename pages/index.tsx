import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/home_hero.jpg';
import logoImage from '../public/logo.svg';
import logoBannerImage from '../public/logo_banner.svg';
import introImage from '../public/intro.jpg';
import { Map } from '../components';
import { url } from 'inspector';
import gsap from 'gsap';

const Header = styled.header`
	background: black;
	width: 100%;
	height: 57px;
`;

const MainNav = styled.nav`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 65% 35%;
`;

const LogoImage = styled.div`
	padding: 0.2rem;
`;

const LogoBannerImage = styled(Image)`
	width: 502px;
	height: 57px;
`;
const HeroBanner = styled.section`
	position: relative;
	height: 45rem;
	max-height: 45rem;
	width: 100vw;
`;

const HeroBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 45rem;
`;

const HeroImage = styled(Image)`
	position: absolute;
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: -1;
`;

const ImageGradientDiv = styled.div`
	position: absolute;
	z-index: 1;
	height: 100%;
	width: 100%;
	opacity: 0;
	box-shadow: inset 0 3rem 15em 1em #000;
`;

const HeroText = styled.div`
	z-index: 10;
	color: white;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 15%;
	height: 100%;
	width: 100%;
	font-size: 2rem;
	text-shadow: black 1px 0 10px;
`;

const HeroTxtH1 = styled.h1`
	opacity: 0;
	transform: translateY(-500px);
`;

const HeroDisappear = styled.span`
	opacity: 0;
`;

const HeroTxtH2 = styled.h2`
	opacity: 0;
	position: absolute;
	left: calc(15% + 210px);
	transform: translateY(-500px);
`;

const WelcomeSection = styled.div`
	min-height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& h2 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}
	& p {
		font-size: 1.5rem;
		font-weight: 200;
		letter-spacing: 0.3px;
	}
`;

const SectionHeader = styled.h2`
	align-self: flex-start;
`;

const IntroSection = styled.div`
	background: hsla(247, 10%, 90%, 1);
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 25rem;
`;

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`;

const IntroImageDiv = styled.div`
	width: 100%;
	height: 100%;
`;

const IntroImage = styled(Image)`
	height: 25rem;
	width: 100%;
	object-fit: cover;
`;

const ContactUsSection = styled.div`
	background: white;
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 45rem;
`;

const ContactDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding: 2.5rem 3rem 3rem;
	gap: 1rem;
	font-size: 1.2rem;
`;

const ContactDetailItem = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const SocialMediaLinks = styled.div`
	height: 2rem;
	width: 80%;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	align-items: center;
	justify-content: center;
`;
const SocialMediaLink = styled.a`
	height: 100%;
	color: hsla(223, 56%, 54%, 1);
	justify-self: center;
	& svg {
		height: 2rem;
		width: 2rem;
	}
`;

const ContactUsMapSection = styled.div`
	background: hsl(240, 11.1%, 96.5%);
`;

const Footer = styled.footer`
	display: flex;
	background: hsla(223, 14%, 54%, 1);
	margin: 0;
	padding: 0;
	justify-content: center;
	min-height: 15rem;
`;

export default function Home() {
	const comp = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		console.log('comp', comp);
		let ctx = gsap.context(() => {
			tl.current = gsap
				.timeline()
				.to('.radialBackground', {
					opacity: 1,
					duration: 1.5,
				})
				.to(
					'.hero_h1',
					{
						delay: 0.3,
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power3.out',
					},
					'<=25%'
				)
				.to(
					'.hero_disappear',
					{
						opacity: 1,
						duration: 0.5,
					},
					'<'
				)
				.to('.hero_disappear', {
					delay: 0.5,
					duration: 1,
					opacity: 0,
				})
				.to(
					'.hero_h2',
					{
						delay: 0.5,
						opacity: 1,
						y: 0,
						duration: 0.3,
						ease: 'sine.out',
					},
					'<'
				);
		});

		return () => ctx.revert();
	}, []);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="BTT Lago Vista" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400,600&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main>
				<Header>
					<MainNav>
						{/* <LogoImage>
              <Image
                src={logoImage}
                alt="BTT Lago Vista logo"
                width={58}
                height={58}
              />
            </LogoImage> */}
						<LogoBannerImage src={logoBannerImage} alt="BTT Lago Vista logo banner" />
					</MainNav>
				</Header>
				<HeroBanner ref={comp}>
					<HeroText>
						<HeroTxtH1 className="hero_h1">
							Coming <HeroDisappear className="hero_disappear">Soon</HeroDisappear>
						</HeroTxtH1>
						<HeroTxtH2 className="hero_h2">to Lago Vista</HeroTxtH2>
					</HeroText>
					<HeroBackground>
						<ImageGradientDiv className="radialBackground"></ImageGradientDiv>
						<HeroImage src={heroImage} alt="BTT Lago Vista hero image" priority placeholder="blur" />
					</HeroBackground>
				</HeroBanner>
				<WelcomeSection>
					<h2>Welcome to Brazilian Top Team Lago Vista</h2>
					<p>There’s no losing in Brazilian Jiu Jitsu. You either win or you learn</p>
				</WelcomeSection>
				<IntroSection>
					<IntroImageDiv>
						<IntroImage src={introImage} alt="BJJ excercise image" placeholder="blur" />
					</IntroImageDiv>
					<TextDiv>
						<SectionHeader>Who we are</SectionHeader>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
							dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</p>
					</TextDiv>
				</IntroSection>
				<ContactUsSection>
					<TextDiv>
						<SectionHeader>Find out more</SectionHeader>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
							dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</p>

						<ContactDetails>
							<ContactDetailItem>
								<MdEmail />
								<a href="mailto:bttlagovista@gmail.com?subject = New Inquiry&body= Hi I'd like to find out more">
									bttlagovista@gmail.com
								</a>
							</ContactDetailItem>
							<ContactDetailItem>
								<BsFillPhoneFill />
								<span>555-555-5555</span>
							</ContactDetailItem>
						</ContactDetails>
						<SocialMediaLinks>
							<SocialMediaLink href="">
								<IoLogoFacebook />
							</SocialMediaLink>
							<SocialMediaLink href="">
								<AiFillInstagram />
							</SocialMediaLink>
							<SocialMediaLink href="">
								<IoLogoTwitter />
							</SocialMediaLink>
						</SocialMediaLinks>
					</TextDiv>
					<ContactUsMapSection>
						<Map />
					</ContactUsMapSection>
				</ContactUsSection>
			</main>

			<Footer>
				<p>© BTT Lago Vista. 2022. We love our users!</p>
			</Footer>
		</div>
	);
}
