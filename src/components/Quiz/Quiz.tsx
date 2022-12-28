import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useTheme } from 'hooks/useTheme';

import { Button } from 'shared';

import { questionsState } from 'store';

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

export const Quiz = () => {
	const questions = useRecoilValue(questionsState);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const handleSubmitClick = () => {
		console.log('Submit Clicked');
	};

	const handleNextClick = () => {
		console.log('Next Clicked');
		if (currentQuestionIndex === questions.length - 1) return;
		setCurrentQuestionIndex(currentQuestionIndex + 1);
	};

	const handleBackClick = () => {
		console.log('Back Clicked');
		if (currentQuestionIndex === 0) return;
		setCurrentQuestionIndex(currentQuestionIndex - 1);
	};

	const { id, questionType, questionText, skills, tags } =
		questions[currentQuestionIndex];
	return (
		<>
			<QuizContainer
				sx={{
					height: '60vh',
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
				<FlexSection>
					<p>Place holder for the answers area</p>
				</FlexSection>
				<FlexSection
					gap={10}
					sx={{
						position: 'absolute',
						bottom: '16px',
					}}
				>
					<Button onClick={handleBackClick}>Back</Button>
					<Button onClick={handleSubmitClick}>Submit</Button>
					<Button onClick={handleNextClick}>Next</Button>
				</FlexSection>
			</QuizContainer>
		</>
	);
};
