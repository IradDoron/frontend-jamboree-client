import {
	Question,
	QuizFilters,
	QuizType,
	skillNames,
	SkillNameType,
} from 'types';

const defaultFilters: QuizFilters = {
	includeSolvedQuestions: false,
	includeSkills: skillNames,
	excludeSkills: [],
	relativeDifficulty: 0,
	difficultyRange: null,
	difficulty: null,
};

export const getQuizQuestions = (
	questionsSet: Question[],
	solvedQuestionsIds: string[],
	questionsAmount: number,
	quizType: QuizType,
	filters: QuizFilters = defaultFilters,
	userSkills: {
		[key in SkillNameType]: number;
	}
): Question[] => {
	const {
		includeSolvedQuestions,
		includeSkills,
		excludeSkills,
		relativeDifficulty,
	} = filters;

	const quizQuestions: Question[] = [];

	const filteredSolvedQuestionsSet = questionsSet.filter((question) => {
		if (includeSolvedQuestions) {
			return true;
		} else {
			return !solvedQuestionsIds.includes(question.id);
		}
	});

	const filteredSkillsQuestionsSet: Question[] = [];

	const filteredIncludedSkillsQuestionsSet = filteredSolvedQuestionsSet.filter(
		(question) => {
			if (!includeSkills) {
				return true;
			} else {
				const { skills } = question;
				const skillsNames = skills.map((skill) => skill.name);
				return skillsNames.some((skillName) =>
					includeSkills.includes(skillName)
				);
			}
		}
	);

	const filteredExcludedSkillsQuestionsSet = filteredSolvedQuestionsSet.filter(
		(question) => {
			if (!excludeSkills) {
				return true;
			} else {
				const { skills } = question;
				const skillsNames = skills.map((skill) => skill.name);
				return !skillsNames.some((skillName) =>
					excludeSkills.includes(skillName)
				);
			}
		}
	);

	if (includeSkills) {
		filteredSkillsQuestionsSet.push(...filteredIncludedSkillsQuestionsSet);
	} else {
		filteredSkillsQuestionsSet.push(...filteredExcludedSkillsQuestionsSet);
	}

	const filteredRelativeDifficultyQuestionsSet =
		filteredSkillsQuestionsSet.filter((question) => {
			const { skills } = question;
			let flag = false;
			for (let skill of skills) {
				const { name, level } = skill;
				const relativeSkillLevel = userSkills[name] + relativeDifficulty;
				if (
					relativeSkillLevel === level ||
					relativeSkillLevel === level + 1 ||
					relativeSkillLevel === level - 1
				) {
					flag = true;
					break;
				} else {
					flag = false;
					break;
				}
			}
			return flag;
		});

	// TODO: Implement difficultyRange filter and difficulty filter

	const filteredQuestionsSet = filteredRelativeDifficultyQuestionsSet;

	const shuffledQuestionsSet = filteredQuestionsSet.sort(
		() => Math.random() - 0.5
	);

	if (shuffledQuestionsSet.length <= questionsAmount) {
		quizQuestions.push(...shuffledQuestionsSet);
		return quizQuestions;
	} else {
		quizQuestions.push(...shuffledQuestionsSet.slice(0, questionsAmount));
		return quizQuestions;
	}
};
