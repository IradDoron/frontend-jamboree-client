import { CodingChallengeQuestion } from 'components/Quiz/CodingChallengeQuestion';
import { FillInTheBlankQuestion } from 'components/Quiz/FillInTheBlankQuestion';
import { MultipleChoiceQuestion } from 'components/Quiz/MultipleChoiceQuestion';
import { TrueFalseQuestion } from 'components/Quiz/TrueFalseQuestion';

import { QuizAnswerSectionProps } from 'components/Quiz/QuizAnswerSection/types';

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
					currentQuestionStatus={currentQuestionStatus}
					isSubmitted={isSubmitted}
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
