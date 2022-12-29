import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { Button } from 'shared';

import { questionsState } from 'store';

import { FlexSection } from 'shared/FlexSection';

import { QuizContainer } from 'components/Quiz/QuizContainer';
import { QuizQuestionText } from 'components/Quiz/QuizQuestionText';
import { QuizQuestionType } from 'components/Quiz/QuizQuestionType';
import { QuizSkillChip } from 'components/Quiz/QuizSkillChip';
import { QuizTagChip } from 'components/Quiz/QuizTagChip';

import { QuizAnswerSection } from 'components/Quiz/QuizAnswerSection';

import { QuestionStatus } from 'types';

import { formatQuestionType } from 'helpers/formatQuestionType';

export const Quiz = () => {
	const questions = useRecoilValue(questionsState);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [currentQuestionStatus, setCurrentQuestionStatus] =
		useState<QuestionStatus>('unanswered');
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		setCurrentQuestionIndex(0);
		setCurrentQuestionStatus('unanswered');
	}, [questions]);

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
