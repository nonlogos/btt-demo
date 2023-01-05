import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';

import { BaseSection, SectionHeader } from '../../styles/globals';
import { mediaBreakpoints } from '../../utils/animation/matchMedia';

const IntroContainer = styled(BaseSection)`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: translateY(-3vh);
	width: 100%;
`;
const IntroImageContainer = styled.div`
	position: relative;
	left: 0;
	height: 95%;
	width: 100%;
	background: url('/group_profile.jpg');
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: cover;
	transform: translateY(8%);
	@media (min-width: 800px) {
		background-position: 50% 20%;
	}
	@media (min-width: 1921px) {
		width: min(80%, 2400px);
		height: 1850px;
		box-shadow: 0px 2px 16px 8px rgba(0, 0, 0, 0.65);
	}
`;

// const IntroGradient = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	background-image: linear-gradient(-180deg, transparent 60%, black 75%);
// 	position: absolute;
// 	transform: translateY(5%);
// 	z-index: 2;
// `;

const IntroText = styled.div`
	color: var(--font-color);
	position: absolute;
	top: 55vh;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	z-index: 3;
	opacity: 0;
	text-align: center;
	transform: translateY(200px);
	& h2 {
		line-height: clamp(1.5rem, 12vw, 72px);
		margin: 0;

		width: 100%;
	}
	@media (min-width: 800px) {
		width: 70vw;
		top: 60vh;
	}
	@media (min-width: 1920px) {
		width: 50%;
	}
`;

export const IntroSection = () => {
	const elem = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add(mediaBreakpoints, (context) => {
			const { reduceMotion } = context.conditions;
			if (!reduceMotion) {
				gsap.to('.image', {
					y: '-10%',
					ease: 'power3.out',
					scrollTrigger: {
						// markers: true,
						scrub: reduceMotion ? false : 0.05,
						trigger: '.coming-soon-section',
						start: 'bottom 30%',
						end: '+=100%',
						invalidateOnRefresh: true,
					},
				});
				gsap.to('.intro-content', {
					y: 0,
					autoAlpha: 1,
					ease: 'power3.inOut',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: 'center+=40% top',
						end: '+=70%',
						invalidateOnRefresh: true,
					},
				});
			} else {
				gsap.to('.image', {
					y: '-10%',
					duration: 0,
				});
				gsap.to('.intro-content', {
					y: 0,
					autoAlpha: 1,
					duration: 0,
				});
			}
		});

		return () => {
			mm.revert();
			ScrollTrigger.refresh();
		};
	}, []);

	return (
		<IntroContainer className="intro-bkgd" ref={elem}>
			<IntroText className="intro-content">
				<SectionHeader>Get Ready to Sweat!</SectionHeader>
				<p>
					Get ready to unleash your inner warrior and dominate the mat with Brazilian Jiu Jitsu (BJJ). This dynamic
					martial art has taken the world by storm with its fierce focus on grappling techniques.
				</p>
			</IntroText>
			{/* <IntroGradient className="image-gradient" /> */}
			<IntroImageContainer className="image"></IntroImageContainer>
		</IntroContainer>
	);
};
