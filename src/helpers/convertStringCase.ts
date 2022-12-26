export const convertStringCase = (str: string, caseType: string) => {
	const lowerCaseStr = str.toLowerCase();
	const lowerCaseCaseType = caseType.toLowerCase();

	if (lowerCaseCaseType === 'camel') {
		return lowerCaseStr.replace(/[-_](.)/g, (match, group1) => {
			return group1.toUpperCase();
		});
	}

	if (lowerCaseCaseType === 'pascal') {
		return lowerCaseStr.replace(/(^\w|[-_](.))/g, (match, group1) => {
			return group1.toUpperCase();
		});
	}

	if (lowerCaseCaseType === 'snake') {
		return lowerCaseStr.replace(/([A-Z])/g, (match, group1) => {
			return `_${group1.toLowerCase()}`;
		});
	}

	if (lowerCaseCaseType === 'kebab') {
		return lowerCaseStr.replace(/([A-Z])/g, (match, group1) => {
			return `-${group1.toLowerCase()}`;
		});
	}

	return str;
};
