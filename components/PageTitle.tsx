import { ReactNode } from 'react';
import styled from 'styled-components';

import { Box } from './Box';
import { header } from './Typography';

const PageTitleContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-align: center;
	margin-top: var(--sp-10x);
	margin-bottom: var(--sp-10x);
	padding: 0 var(--sp-2x);
	@media (min-width: 1020px) {
		max-width: 90%;
		margin: 10rem auto 8rem auto;
		padding: 0 var(--sp-10x);
	}
`;

export const PageTitle = ({ children, title }: { children?: ReactNode; title: string }) => (
	<PageTitleContainer>
		<header.H1>{title}</header.H1>
		{children}
	</PageTitleContainer>
);
