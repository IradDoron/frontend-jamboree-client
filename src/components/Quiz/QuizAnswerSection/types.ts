import { Dispatch, SetStateAction } from 'react';
import { Question, QuestionStatus } from 'types';

export interface QuizAnswerSectionProps {
	question: Question;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
	currentQuestionStatus: QuestionStatus;
	isSubmitted: boolean;
}
