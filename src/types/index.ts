export type QuestionType =
	| 'multiple-choice'
	| 'short-answer'
	| 'true-false'
	| 'fill-in-the-blank'
	| 'coding-challenge';

export interface Question {
	id: string;
	questionType: QuestionType;
	questionText: string;
}

export interface MultipleChoiceQuestion extends Question {
	questionType: 'multiple-choice';
	falseAnswers: string[];
	correctAnswer: string;
}

export interface ShortAnswerQuestion extends Question {
	questionType: 'short-answer';
	possibleAnswers: string[];
}

export interface TrueFalseQuestion extends Question {
	questionType: 'true-false';
	correctAnswer: boolean;
}

export interface FillInTheBlankQuestion extends Question {
	questionType: 'fill-in-the-blank';
	correctAnswers: string[];
}

export interface CodingChallengeQuestion extends Question {
	questionType: 'coding-challenge';
	correctAnswer: string;
}
