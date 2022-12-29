import { Dispatch, SetStateAction } from 'react';

import { Question, QuestionStatus } from 'types';

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
