import styled from 'styled-components';
import Link from 'next/link';
import { FiUserPlus, FiCalendar } from 'react-icons/fi';

import { Button } from './Button';
import { SIGN_UP_URL } from '../siteContent';

const Container = styled.div`
	display: flex;
	gap: var(--sp-2x);
	& button {
		box-shadow: var(--box-shadow);
	}
`;

export const ActionsContainer = ({ showButtonTwo = true }: { showButtonTwo?: boolean }) => {
	return (
		<Container>
			<Button Icon={FiUserPlus}>
				<Link href={SIGN_UP_URL}>Enroll Today*</Link>
			</Button>
			{showButtonTwo && (
				<Button Icon={FiCalendar}>
					<Link href="/schedules">See Schedules</Link>
				</Button>
			)}
		</Container>
	);
};
