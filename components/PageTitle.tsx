import { ReactNode } from 'react';
import styled from 'styled-components';

import { Box } from './Box';
import { header } from './Typography';

const PageTitleContainer = styled(Box)`
	margin-top: var(--sp-10x);
	margin-bottom: var(--sp-3x);
	padding: 0 var(--sp-2x);
	@media (min-width: 1025px) {
		padding: var(--sp-5x);
	}
`;

export const PageTitle = ({ children }: { children: ReactNode }) => (
	<PageTitleContainer>
		<header.H2>{children}</header.H2>
	</PageTitleContainer>
);
