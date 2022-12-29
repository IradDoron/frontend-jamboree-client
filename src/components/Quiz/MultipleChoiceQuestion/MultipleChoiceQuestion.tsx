import { useEffect, useState } from 'react';

import { Button } from 'shared';

import { useTheme } from 'hooks/useTheme';

import { MultipleChoiceQuestionProps } from 'components/Quiz/MultipleChoiceQuestion/types';

import { ResultMsg } from 'components/Quiz/ResultMsg';

export const MultipleChoiceQuestion = ({
	question,
	setCurrentQuestionStatus,
	currentQuestionStatus,
	isSubmitted,
}: MultipleChoiceQuestionProps) => {
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
	const { falseAnswers, correctAnswer } = question;
	const { theme } = useTheme();

	useEffect(() => {
		const concatArray = [...falseAnswers, correctAnswer];
		const shuffledArray = concatArray.sort(() => Math.random() - 0.5);
		setShuffledAnswers(shuffledArray);
	}, [falseAnswers, correctAnswer]);

	const handleAnswerClick = (selectedAnswer: string) => {
		if (isSubmitted) return;
		setSelectedAnswer(selectedAnswer);
		if (selectedAnswer === correctAnswer) {
			setCurrentQuestionStatus('correct');
		} else {
			setCurrentQuestionStatus('incorrect');
		}
	};

	const getButtonStyles = (
		buttonAnswer: string,
		selectedAnswer: string | null
	) => {
		const selectedStyles = {
			backgrounColor: theme.secondaryColor,
			outlineColor: theme.secondaryColor,
			outlineStyle: 'solid',
			outlineWidth: '4px',
		};

		const unselectedStyles = {
			backgroundColor: 'transparent',
			outlineColor: theme.secondaryColor,
			outlineStyle: 'solid',
			outlineWidth: '2px',
		};

		if (buttonAnswer === selectedAnswer) {
			return selectedStyles as React.CSSProperties;
		} else {
			return unselectedStyles as React.CSSProperties;
		}
	};
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '12px',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: '12px',
				}}
			>
				{shuffledAnswers.map((answer) => (
					<Button
						key={answer}
						onClick={() => handleAnswerClick(answer)}
						sx={{
							...getButtonStyles(answer, selectedAnswer),
						}}
					>
						{answer}
					</Button>
				))}
			</div>
			<ResultMsg
				isSubmitted={isSubmitted}
				isCorrect={currentQuestionStatus === 'correct'}
			/>
		</div>
	);
};
