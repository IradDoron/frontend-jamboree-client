import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useTheme } from 'hooks/useTheme';

import { Button } from 'shared';

import { questionsState } from 'store';

import {
	Question,
	QuestionStatus,
	TrueFalseQuestion as TrueFalseQuestionType,
} from 'types';

export const formatQuestionType = (type: string) => {
	switch (type) {
		case 'true-false':
			return 'True or False';
		case 'multiple-choice':
			return 'Multiple Choice';
		case 'coding-challenge':
			return 'Coding Challenge';
		case 'fill-in-the-blank':
			return 'Fill in the Blank';
		case 'short-answer':
			return 'Short Answer';
		default:
			return 'Unknown';
	}
};

export interface FlexSectionProps {
	children: React.ReactNode;
	gap?: number;
	sx?: React.CSSProperties;
}

export const FlexSection = ({ children, gap = 0, sx }: FlexSectionProps) => {
	return (
		<section
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignContent: 'center',
				gap: `${gap}px`,
				width: '100%',
				...sx,
			}}
		>
			{children}
		</section>
	);
};

export interface QuizContainerProps {
	children: React.ReactNode;
	sx?: React.CSSProperties;
}

export const QuizContainer = ({ children, sx }: QuizContainerProps) => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				border: '4px solid ',
				width: '100%',
				gap: '16px',
				position: 'relative',
				borderColor: theme.secondaryColor,
				...sx,
			}}
		>
			{children}
		</div>
	);
};

export interface QuizSkillChipProps {
	name: string;
	level: number;
}

export const QuizSkillChip = ({ name, level }: QuizSkillChipProps) => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignContent: 'center',
				gap: '8px',
				padding: '8px',
				borderRadius: '8px',
				backgroundColor: theme.secondaryColor,
			}}
		>
			<p>{name}</p>
			<p>{level}</p>
		</div>
	);
};

export interface QuizTagChipProps {
	name: string;
}

export const QuizTagChip = ({ name }: QuizTagChipProps) => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignContent: 'center',
				gap: '8px',
				padding: '8px',
				borderRadius: '8px',
				borderColor: theme.secondaryColor,
				borderStyle: 'solid',
				borderWidth: '2px',
			}}
		>
			<p>{name}</p>
		</div>
	);
};

export interface QuizQuestionTextProps {
	children: React.ReactNode;
}

export const QuizQuestionText = ({ children }: QuizQuestionTextProps) => {
	return (
		<p
			style={{
				fontSize: '1.5rem',
				overflow: 'break-word',
				margin: '0 24px',
				lineHeight: '2rem',
			}}
		>
			{children}
		</p>
	);
};

export interface QuizQuestionTypeProps {
	children: React.ReactNode;
}

export const QuizQuestionType = ({ children }: QuizQuestionTypeProps) => {
	const { theme } = useTheme();
	return (
		<p
			style={{
				fontSize: '1.6rem',
				overflow: 'break-word',
				margin: '0 24px',
				textShadow: `0 0 4px ${theme.secondaryColor}`,
			}}
		>
			{children}
		</p>
	);
};

export interface TrueFalseQuestionProps {
	question: TrueFalseQuestionType;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
	currentQuestionStatus: QuestionStatus;
	isSubmitted: boolean;
}

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
			{isSubmitted && (
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
						{currentQuestionStatus === 'correct' ? 'Correct!' : 'Not Quite :('}
					</p>
				</div>
			)}
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

export interface MultipleChoiceQuestionProps {
	question: Question;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
}

export const MultipleChoiceQuestion = ({
	question,
	setCurrentQuestionStatus,
}: MultipleChoiceQuestionProps) => {
	return (
		<div>
			<p>Multiple Choice</p>
			<p>{question.questionText}</p>
		</div>
	);
};

export interface CodingChallengeQuestionProps {
	question: Question;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
}

export const CodingChallengeQuestion = ({
	question,
	setCurrentQuestionStatus,
}: CodingChallengeQuestionProps) => {
	return (
		<div>
			<p>Coding Challenge</p>
			<p>{question.questionText}</p>
		</div>
	);
};

export interface FillInTheBlankQuestionProps {
	question: Question;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
}

export const FillInTheBlankQuestion = ({
	question,
	setCurrentQuestionStatus,
}: FillInTheBlankQuestionProps) => {
	return (
		<div>
			<p>Fill in the blank</p>
			<p>{question.questionText}</p>
		</div>
	);
};

export interface QuizAnswerSectionProps {
	question: Question;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
	currentQuestionStatus: QuestionStatus;
	isSubmitted: boolean;
}

export const QuizAnswerSection = ({
	question,
	setCurrentQuestionStatus,
	currentQuestionStatus,
	isSubmitted,
}: QuizAnswerSectionProps) => {
	const { questionType } = question;
	switch (questionType) {
		case 'true-false':
			return (
				<TrueFalseQuestion
					question={question}
					setCurrentQuestionStatus={setCurrentQuestionStatus}
					currentQuestionStatus={currentQuestionStatus}
					isSubmitted={isSubmitted}
				/>
			);
		case 'multiple-choice':
			return (
				<MultipleChoiceQuestion
					question={question}
					setCurrentQuestionStatus={setCurrentQuestionStatus}
				/>
			);
		case 'coding-challenge':
			return (
				<CodingChallengeQuestion
					question={question}
					setCurrentQuestionStatus={setCurrentQuestionStatus}
				/>
			);
		case 'fill-in-the-blank':
			return (
				<FillInTheBlankQuestion
					question={question}
					setCurrentQuestionStatus={setCurrentQuestionStatus}
				/>
			);
		default:
			return <p>Unknown question type</p>;
	}
};

export const Quiz = () => {
	const questions = useRecoilValue(questionsState);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [currentQuestionStatus, setCurrentQuestionStatus] =
		useState<QuestionStatus>('unanswered');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmitClick = () => {
		setIsSubmitted(true);
	};

	const handleNextClick = () => {
		if (currentQuestionIndex === questions.length - 1) return;
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		setIsSubmitted(false);
		setCurrentQuestionStatus('unanswered');
	};

	const handleBackClick = () => {
		if (currentQuestionIndex === 0) return;
		setCurrentQuestionIndex(currentQuestionIndex - 1);
		setIsSubmitted(false); // TODO: user should'nt be able to go back if the question has been submitted
		setCurrentQuestionStatus('unanswered');
	};

	const { id, questionType, questionText, skills, tags } =
		questions[currentQuestionIndex];
	return (
		<>
			<QuizContainer
				sx={{
					height: '800px',
				}}
			>
				<FlexSection
					sx={{
						justifyContent: 'space-between',
						padding: '8px 16px',
						fontSize: '1.6rem',
					}}
				>
					<p>Question ID: {id}</p>
					<p>{`${currentQuestionIndex + 1} / ${questions.length}`}</p>
				</FlexSection>
				<FlexSection gap={8}>
					{skills.map((skill) => {
						const { name, level } = skill;
						return <QuizSkillChip name={name} level={level} />;
					})}
				</FlexSection>
				<FlexSection gap={8}>
					{tags.map((tag) => {
						return <QuizTagChip name={tag} />;
					})}
				</FlexSection>
				<FlexSection>
					<QuizQuestionType>
						{formatQuestionType(questionType)}
					</QuizQuestionType>
				</FlexSection>

				<FlexSection>
					<QuizQuestionText>{questionText}</QuizQuestionText>
				</FlexSection>
				<FlexSection
					sx={{
						margin: '32px 0',
					}}
				>
					<QuizAnswerSection
						question={questions[currentQuestionIndex]}
						setCurrentQuestionStatus={setCurrentQuestionStatus}
						currentQuestionStatus={currentQuestionStatus}
						isSubmitted={isSubmitted}
					/>
				</FlexSection>
				<FlexSection
					gap={10}
					sx={{
						position: 'absolute',
						bottom: '16px',
					}}
				>
					<Button
						onClick={handleBackClick}
						isDisabled={currentQuestionStatus === 'unanswered'}
					>
						Back
					</Button>
					<Button
						onClick={handleSubmitClick}
						sx={{
							fontSize: '2rem',
							padding: '8px 16px',
						}}
					>
						Submit
					</Button>
					<Button
						onClick={handleNextClick}
						isDisabled={currentQuestionStatus === 'unanswered'}
					>
						Next
					</Button>
				</FlexSection>
			</QuizContainer>
		</>
	);
};
