import { QuestionTag } from 'types/questionTags';

export type QuestionType =
	| 'multiple-choice'
	| 'short-answer'
	| 'true-false'
	| 'fill-in-the-blank'
	| 'coding-challenge';

export const skillNames = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'TypeScript',
	'jQuery',
] as SkillNameType[];

// TODO: fine a way to create this type from skillNames
export type SkillNameType =
	| 'HTML'
	| 'CSS'
	| 'JavaScript'
	| 'React'
	| 'Redux'
	| 'TypeScript'
	| 'jQuery';

export interface Skill {
	name: SkillNameType;
	level: number;
}

export interface QuestionBaseInterface {
	id: string;
	questionType: QuestionType;
	questionText: string;
	skills: Skill[];
	tags: QuestionTag[];
}

export interface MultipleChoiceQuestion extends QuestionBaseInterface {
	questionType: 'multiple-choice';
	falseAnswers: string[];
	correctAnswer: string;
}

export interface ShortAnswerQuestion extends QuestionBaseInterface {
	questionType: 'short-answer';
	possibleAnswers: string[];
}

export interface TrueFalseQuestion extends QuestionBaseInterface {
	questionType: 'true-false';
	isCorrect: boolean;
	correctAnswer?: string;
}

export interface FillInTheBlankQuestion extends QuestionBaseInterface {
	questionType: 'fill-in-the-blank';
	correctAnswers: string[];
	falseAnswers: string[];
}

export interface CodingChallengeQuestion extends QuestionBaseInterface {
	questionType: 'coding-challenge';
	correctAnswer: string;
}

export type Question =
	| MultipleChoiceQuestion
	| ShortAnswerQuestion
	| TrueFalseQuestion
	| FillInTheBlankQuestion
	| CodingChallengeQuestion;

export type QuizType = 'practice' | 'challenge';

export type DifficultyTerm = 'easy' | 'medium' | 'hard';

export interface QuizFilters {
	includeSolvedQuestions?: boolean;
	includeSkills?: SkillNameType[];
	excludeSkills?: SkillNameType[];
	relativeDifficulty: number;
	difficultyRange?: {
		min: number;
		max: number;
	} | null;
	difficulty?: number | null;
	questionsTypes?: QuestionType[];
}

export type QuestionStatus = 'unanswered' | 'correct' | 'incorrect';
