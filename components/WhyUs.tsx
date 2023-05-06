import styled from 'styled-components';
import { header, Text } from './Typography';

const Container = styled.div`
	margin-top: 2rem;
	margin-bottom: 0;
	padding: 0;
	@media (min-width: 1020px) {
		padding: 0 var(--sp-6x);
		max-width: 90%;
		margin: 3rem auto var(--sp-10x) auto;
	}
`;

const ContentHeader = styled(header.H2)`
	padding: 0 var(--sp-2x);
	margin-bottom: var(--sp-5x);
	@media (min-width: 1020px) {
		padding: 0;
	}
`;

const ContentContainer = styled.div`
	background-color: var(--bkgd-section-color);
	padding: var(--sp-5x);
	border-radius: 5px;
	& li {
		margin-bottom: var(--sp-5x);
		& h3 {
			font-size: 0.9em;
		}
	}
`;

export const WhyUs = () => {
	return (
		<Container>
			<ContentHeader>WHY CHOOSE BTT LAGO VISTA?</ContentHeader>
			<ContentContainer>
				<ul>
					<li>
						<header.H3>A DIFFERENT KIND OF FITNESS</header.H3>
						<Text>
							Brazilian Jiu-Jitsu is the ultimate full-body workout! You&apos;ll see improvements in strength, reflexes,
							and weight loss + reduced stress and improved mental health. Everything to gain, nothing to lose.
						</Text>
					</li>
					<li>
						<header.H3>INCLUSIVE ENVIRONMENT</header.H3>
						<Text>
							We cultivate an inclusive environment where advanced students support and encourage newer members.
							We&apos;re a family, and disrespectful, negative attitudes have no place here, y&apos;all.
						</Text>
					</li>
					<li>
						<header.H3>A+ COACHING</header.H3>
						<Text>
							Israel is a confidence boosting wizard! His classes are filled with laughter and good vibes, and before
							you know it, you&apos;ll be blown away by how much you&apos;ve improved. Don&apos;t be surprised if you
							start retaining techniques like a champ and impressing your friends and family.
						</Text>
					</li>
				</ul>
			</ContentContainer>
		</Container>
	);
};
