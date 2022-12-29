import { Dispatch, SetStateAction } from 'react';

import { Question, QuestionStatus } from 'types';

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
