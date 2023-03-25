import styled from 'styled-components';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';

import { BaseSection, Map } from '../';

const ContactUsSection = styled(BaseSection)`
	position: relative;
	height: 60rem;
	width: 100%;
	background: var(--bkgd-color);
	display: grid;
	grid-template-columns: 1fr;
	gap: 0;
	text-align: left;
	@media (min-width: 860px) {
		height: auto;
		text-align: right;
		gap: 3vh;
	}
	@media (min-width: 1010px) {
		grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
	}
`;

const ContactContent = styled.div`
	align-self: center;
	color: hsl(240, 3.3%, 11.8%);
	display: grid;
	grid-template-columns: 1fr;
	padding: clamp(2vw, 7vw, 2rem);
	padding-top: 0;
	gap: 0;
	@media (min-width: 860px) {
		justify-self: end;
		gap: clamp(0.5rem, 5vw, 1rem);
	}
	& h2 {
		padding-top: 0;
		@media (min-width: 860px) {
			padding-top: clamp(2vw, 7vw, 2rem);
		}
	}
`;

const ContactDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	gap: 1rem;
	font-size: 1.2rem;
	justify-self: start;
	@media (min-width: 860px) {
		justify-self: end;
	}
`;

const ContactDetailItem = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const SocialMediaLinks = styled.div`
	padding-top: clamp(0.5rem, 5vw, 1rem);
	height: 3rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const SocialMediaLink = styled.a`
	height: 100%;
	color: hsla(223, 56%, 54%, 1);
	justify-self: center;
	& svg {
		height: 3rem;
		width: 3rem;
	}
`;

const ContactUsMapSection = styled.div`
	background: hsl(240, 11.1%, 96.5%);
	grid-row-end: 1;
	min-height: 50vh;
	@media (min-width: 800px) {
		grid-row-end: auto;
	}
`;

export const ContactUs = () => {
	return (
		<ContactUsSection>
			<ContactContent>
				{/* <SectionHeader>Get Started</SectionHeader> */}
				<p>
					Nemo enim ipsam volup tatem quia voluptas sit aspe natur aut odit aut fugit, sed quia consetur magni dolores
					eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
				</p>

				<ContactDetails className="contact-details">
					<ContactDetailItem>
						<MdEmail size="32px" />
						<a href="mailto:bttlagovista@gmail.com?subject = New Inquiry&body= Hi I'd like to find out more">
							bttlagovista@gmail.com
						</a>
					</ContactDetailItem>
					<ContactDetailItem>
						<BsFillPhoneFill size="32px" />
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
			</ContactContent>
			<ContactUsMapSection>
				<Map />
			</ContactUsMapSection>
		</ContactUsSection>
	);
};
