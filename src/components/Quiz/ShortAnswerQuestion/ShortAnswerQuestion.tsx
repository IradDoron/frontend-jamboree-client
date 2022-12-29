import { useEffect, useState } from 'react';

import { useTheme } from 'hooks/useTheme';

import { ShortAnswerQuestionProps } from 'components/Quiz/ShortAnswerQuestion/types';

import { ResultMsg } from 'components/Quiz/ResultMsg';

export const ShortAnswerQuestion = ({
	question,
	setCurrentQuestionStatus,
	currentQuestionStatus,
	isSubmitted,
}: ShortAnswerQuestionProps) => {
	const [currentAnswer, setCurrentAnswer] = useState<string>('');
	const { theme } = useTheme();
	const { possibleAnswers } = question;

	useEffect(() => {
		setCurrentAnswer('');
	}, [question, setCurrentAnswer]);

	useEffect(() => {
		if (isSubmitted) {
			const isCorrect = possibleAnswers.includes(currentAnswer);
			if (isCorrect) {
				setCurrentQuestionStatus('correct');
			} else {
				setCurrentQuestionStatus('incorrect');
			}
		}
	}, [isSubmitted, currentAnswer, setCurrentQuestionStatus, possibleAnswers]);

	const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCurrentAnswer(e.target.value);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '32px',
			}}
		>
			<textarea
				style={{
					width: '500px',
					margin: '0 auto',
					height: '200px',
					resize: 'none',
					border: `4px solid ${theme.primaryColor}`,
					backgroundColor: theme.textColor,
					color: theme.backgroundColor,
					borderRadius: '4px',
					padding: '12px 20px',
					boxSizing: 'border-box',
					fontSize: '1.2rem',
					outline: 'none',
				}}
				readOnly={isSubmitted}
				onChange={(e) => handleAnswerChange(e)}
				value={currentAnswer}
			/>
			<ResultMsg
				isCorrect={currentQuestionStatus === 'correct'}
				isSubmitted={isSubmitted}
			/>
			{isSubmitted && (
				<div>
					<h2
						style={{
							fontSize: '1.6rem',
							textAlign: 'center',
							margin: '16px auto',
							marginBottom: '16px',
						}}
					>
						{possibleAnswers.length === 1 ? 'Answer:' : 'Possible Answers:'}
					</h2>
					<ul
						style={{
							listStyle: 'none',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '16px',
						}}
					>
						{possibleAnswers.map((answer, index) => (
							<li
								key={index}
								style={{
									fontSize: '1.2rem',
									color: theme.textColor,
								}}
							>
								<p
									style={{
										maxWidth: '70ch',
									}}
								>
									{answer}
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
