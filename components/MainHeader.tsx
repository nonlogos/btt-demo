import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/legacy/image';
import { RxHamburgerMenu } from 'react-icons/rx';

import { MainNav } from './';
import logoBannerImage from '../public/logo_banner_sm.svg';

const Header = styled.header`
	background: black;
	width: 100%;
	height: clamp(2rem, 10vmin, 50px);
	display: flex;

	padding: 0.5rem;
	transform: translateX(-4px);
	position: fixed;
	z-index: 100;
	transform: translateY(-500px);
	opacity: 0;
	@media (min-width: 800px) {
		height: 52px;
		transform: translateY(-500px);
		opacity: 0;
	}
`;
const LogoContainer = styled.div`
	position: relative;
	display: list-item;
	width: 100px;
`;
const LogoBannerImage = styled(Image)`
	width: auto;
	height: 100%;
	object-position: left;
`;

const NavContainer = styled.div`
	padding-right: var(--sp-3x);
	width: calc(100% - 100px);
	& ul {
		display: flex;
		justify-content: end;
		gap: var(--sp-3x);
		color: var(--font-color-light);
		font-size: 0.8rem;
	}
`;

export const MainHeader = () => {
	const header = useRef<HTMLDivElement | null>(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.main-nav', {
				y: 0,
				autoAlpha: 1,
				duration: 0.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.hero-bkgd',
					start: '+=1%',
					end: '+=10%',
					toggleActions: 'play none none reverse',
				},
			});
		});
		return () => ctx.revert();
	}, []);
	return (
		<Header className="main-nav" ref={header}>
			<LogoContainer>
				<LogoBannerImage src={logoBannerImage} alt="BTT Lago Vista logo banner" layout="fill" objectFit="contain" />
			</LogoContainer>
			<NavContainer>{MainNav}</NavContainer>
		</Header>
	);
};
