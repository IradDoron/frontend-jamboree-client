export const formatQuestionType = (type: string) => {
	switch (type) {
		case 'true-false':
			return 'True or False';
		case 'multiple-choice':
			return 'Multiple Choice';
		case 'coding-challenge':
			return 'Coding Challenge';
		case 'fill-in-the-blank':
			return 'Fill in the Blank';
		case 'short-answer':
			return 'Short Answer';
		default:
			return 'Unknown';
	}
};
