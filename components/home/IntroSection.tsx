import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';

import { SectionHeader } from '../global';
import { mediaBreakpoints } from '../../utils/animation/matchMedia';

const IntroContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: 0;
	width: 100%;
	z-index: 0;
`;
const IntroImageContainer = styled.div`
	position: relative;
	left: 0;
	height: 10rem;
	width: 100%;
	background: url('/group_profile.jpg');
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: cover;
	transform: translateY(-3vh);
	@media (min-width: 860px) {
		height: min(75vmin, 36rem);
	}
	@media (min-width: 1921px) {
		width: min(80%, 2400px);
		height: 1850px;
		box-shadow: 0px 2px 16px 8px rgba(0, 0, 0, 0.65);
	}
`;

const IntroText = styled.div`
	position: absolute;
	top: 50%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	z-index: 5;
	opacity: 0;
	color: var(--font-color);
	text-align: center;
	transform: translateY(200px);
	& h2 {
		line-height: clamp(1.5rem, 12vw, 72px);
		margin: 0;
		width: 100%;
	}
	@media (min-width: 800px) {
		width: 70vw;
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
		mm.add(mediaBreakpoints, (context: any) => {
			const { reduceMotion, isMobile } = context.conditions;
			if (!reduceMotion) {
				// animation for the background image
				gsap.to('.image', {
					y: '-10%',
					duration: 1,
					ease: 'power3.out',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: 'bottom+=20% top',
						end: '+=100%',
						invalidateOnRefresh: true,
					},
				});
				if (!isMobile) {
					gsap.to('.image', {
						y: '-15%',
						ease: 'power3.out',
						scrollTrigger: {
							// markers: true,
							scrub: 0.05,
							trigger: '.coming-soon-section',
							start: 'bottom+=120% top',
							end: '+=30%',
							invalidateOnRefresh: true,
						},
					});
				}

				gsap.to('.intro-content', {
					y: '0',
					duration: 1.5,
					autoAlpha: 1,
					ease: 'power3.inOut',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: 'bottom+=20% top',
						end: '+=70%',
						invalidateOnRefresh: true,
					},
				});
				if (!isMobile) {
					gsap.to('.intro-content', {
						y: '-20vh',
						autoAlpha: 0.1,
						ease: 'power3.inOut',
						scrollTrigger: {
							// markers: true,
							scrub: 0.05,
							trigger: '.coming-soon-section',
							start: 'bottom+=100% top',
							end: '+=40%',
							invalidateOnRefresh: true,
						},
					});
				}
			} else {
				// no animation: reduce motion
				gsap.to('.image', {
					y: '-10%',
					duration: 0,
				});
				gsap.to('.intro-content', {
					y: 0,
					autoAlpha: 1,
					duration: 0,
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: 'bottom+=30% top',
						end: '+=200%',
						invalidateOnRefresh: true,
					},
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
