import { Dispatch, SetStateAction } from 'react';

import {
	QuestionStatus,
	ShortAnswerQuestion as ShortAnswerQuestionType,
} from 'types';

export interface ShortAnswerQuestionProps {
	question: ShortAnswerQuestionType;
	setCurrentQuestionStatus: Dispatch<SetStateAction<QuestionStatus>>;
	currentQuestionStatus: QuestionStatus;
	isSubmitted: boolean;
}
