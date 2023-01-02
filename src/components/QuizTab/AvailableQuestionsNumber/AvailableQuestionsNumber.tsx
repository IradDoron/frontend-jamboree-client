import { AvailableQuestionsNumberProps } from 'components/QuizTab/AvailableQuestionsNumber/types';
import { useStyles } from 'components/QuizTab/useStyles';

export const AvailableQuestionsNumber = ({
	availableQuestionsNumber: number,
}: AvailableQuestionsNumberProps) => {
	const styles = useStyles();
	const { labelStyles } = styles;

	return <label style={labelStyles}>Avable questions: {number}</label>;
};
