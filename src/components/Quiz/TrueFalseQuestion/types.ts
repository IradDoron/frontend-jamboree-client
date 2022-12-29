import { Dispatch, SetStateAction } from 'react';
import { QuestionStatus, TrueFalseQuestion } from 'types';

export interface TrueFalseQuestionProps {
	question: TrueFalseQuestion;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
	currentQuestionStatus: QuestionStatus;
	isSubmitted: boolean;
}
