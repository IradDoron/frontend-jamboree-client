import { useEffect, useState } from 'react';

import { useTheme } from 'hooks/useTheme';

import { Button } from 'shared';

import { TrueFalseQuestionProps } from 'components/Quiz/TrueFalseQuestion/types';

import { ResultMsg } from 'components/Quiz/ResultMsg';

export const TrueFalseQuestion = ({
	question,
	setCurrentQuestionStatus,
	currentQuestionStatus,
	isSubmitted,
}: TrueFalseQuestionProps) => {
	const { theme } = useTheme();
	const { isCorrect, correctAnswer } = question;
	const [userChoice, setUserChoice] = useState<'true' | 'false' | null>(null);

	useEffect(() => {
		setUserChoice(null);
	}, [question]);

	useEffect(() => {
		if (userChoice === null) {
			return;
		} else if (userChoice === 'true' && isCorrect) {
			setCurrentQuestionStatus('correct');
		} else {
			setCurrentQuestionStatus('incorrect');
		}
	}, [userChoice, isCorrect, setCurrentQuestionStatus]);

	const handleTrueClick = () => {
		if (isSubmitted) {
			return null;
		} else {
			setUserChoice('true');
		}
	};

	const handleFalseClick = () => {
		if (isSubmitted) {
			return null;
		} else {
			setUserChoice('false');
		}
	};

	const defaultStyles = {
		width: '200px',
		height: '120px',
		borderRadius: '8px',
		fontSize: '4rem',
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignContent: 'center',
					gap: '32px',
				}}
			>
				<Button
					onClick={handleTrueClick}
					sx={
						userChoice === 'true'
							? { backgroundColor: theme.secondaryColor, ...defaultStyles }
							: {
									backgroundColor: 'transparent',
									outlineColor: theme.secondaryColor,
									outlineStyle: 'solid',
									outlineWidth: '6px',
									...defaultStyles,
							  }
					}
				>
					True
				</Button>
				<Button
					onClick={handleFalseClick}
					sx={
						userChoice === 'false'
							? { backgroundColor: theme.secondaryColor, ...defaultStyles }
							: {
									backgroundColor: 'transparent',
									outlineColor: theme.secondaryColor,
									outlineStyle: 'solid',
									outlineWidth: '6px',
									...defaultStyles,
							  }
					}
				>
					False
				</Button>
			</div>
			<ResultMsg
				isSubmitted={isSubmitted}
				isCorrect={currentQuestionStatus === 'correct'}
			/>
			{isSubmitted && !isCorrect && (
				<div>
					<p
						style={{
							fontSize: '1.2rem',
							color: theme.textColor,
						}}
					>
						{correctAnswer}
					</p>
				</div>
			)}
		</div>
	);
};
