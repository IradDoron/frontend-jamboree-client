import { ResultMsgProps } from 'components/Quiz/ResultMsg/types';

import { useTheme } from 'hooks/useTheme';

export const ResultMsg = ({ isCorrect, isSubmitted }: ResultMsgProps) => {
	const { theme } = useTheme();
	if (!isSubmitted) return null;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignContent: 'center',
				gap: '32px',
			}}
		>
			<p
				style={{
					fontSize: '3rem',
					color: theme.secondaryColor,
				}}
			>
				{isCorrect ? 'Correct!' : 'Not Quite :('}
			</p>
		</div>
	);
};
