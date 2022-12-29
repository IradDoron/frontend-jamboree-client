import { Dispatch, SetStateAction } from 'react';

import {
	MultipleChoiceQuestion as MultipleChoiceQuestionType,
	QuestionStatus,
} from 'types';

export interface MultipleChoiceQuestionProps {
	question: MultipleChoiceQuestionType;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
	currentQuestionStatus: QuestionStatus;
	isSubmitted: boolean;
}
