import { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/legacy/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { mediaBreakpoints } from '../../utils';
import { BaseSection, header } from '../global';
import bioImage from '../../public/bio.jpg';

const Container = styled(BaseSection)`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	background: white;
	margin-top: 300vh; // so the reveal of introSection will close slower
	overflow: hidden;

	@media (min-width: 500px) {
		margin-top: 300vmin;
	}
	@media (min-width: 860px) {
		margin-top: 200vmin;
		grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
		align-items: unset;
	}
`;

const BioImage = styled(Image)`
	width: 80%;
	height: 50vmin;
	margin: 10vmin auto 0;
	object-fit: cover;
	border: 20px solid white;
	box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.35);
	object-position: 50% top;
	@media (min-width: 860px) {
		height: 100%;
		margin: 0;
		width: 100%;
		border: none;
		box-shadow: none;
		object-position: 50% 50%;
	}
`;

const BioContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	padding: 2rem 4rem 2rem 2rem;
	margin-top: 0;
	padding: 2rem;

	@media (min-width: 860px) {
		padding: 2rem 4rem 2rem 2rem;
		margin-top: 5rem;
	}
	& .content {
		opacity: 0;
		transform: translateY(0);
	}
	& h2 {
		margin: 0;
		display: flex;
		flex-direction: column;
		& .meet-professor {
			font-size: 40%;
			text-transform: uppercase;
		}
		& .isreal-davila {
			padding-bottom: 20px;
			line-height: 100%;
		}
	}
`;

export const BioSection = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add(mediaBreakpoints, (context: any) => {
			const { reduceMotion, isMobile } = context.conditions;
			if (!reduceMotion) {
				gsap.to('.content', {
					autoAlpha: 1,
					stagger: 0.1,
					ease: 'power3.Out',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.bio-section',
						start: `${isMobile ? '-=35%' : '-=30%'}`,
						end: `${isMobile ? '+=80%' : '+=70%'}`,
						fastScrollEnd: true,
					},
				});
			} else {
				gsap.to('.content', {
					y: 0,
					duration: 0,
				});
				gsap.to('.content', {
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
		<Container className="bio-section">
			<BioImage src={bioImage} alt="Professor Israel Davila" placeholder="blur" className="bio-image" />
			<BioContent>
				<header.H2 className="content">
					<span className="meet-professor">Meet Professor</span>
					<span className="isreal-davila">Israel Davila</span>
				</header.H2>
				<div className="content">
					<p>
						Owner and instructor of Brazilian Top Team Lago Vista. With over a decade of BJJ training under his belt,
						Israel is a formidable force on the mat. He's been with the Brazilian Top Team family since 2016, and his
						skills as an IBJJF competitor and multiple-time IBJJF champion speak for themselves.
					</p>
					<p>
						Israel is also known as one of the most friendly and constructive instructors you’ll ever work with. From
						kids to adult belts of all colors, Israel has a way with people that will leave you feeling heard and
						respected while sharing more than a few good laughs.
					</p>
				</div>
			</BioContent>
		</Container>
	);
};
