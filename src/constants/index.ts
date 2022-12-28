import { DifficultyTerm } from 'types';

type DifficultyDictionary = {
	[key in DifficultyTerm]: {
		min: number;
		max: number;
	};
};

export const DIFFICULTY_DICTIONARY = {
	easy: {
		min: 1,
		max: 3,
	},
	medium: {
		min: 4,
		max: 6,
	},
	hard: {
		min: 7,
		max: 9,
	},
} as DifficultyDictionary;
