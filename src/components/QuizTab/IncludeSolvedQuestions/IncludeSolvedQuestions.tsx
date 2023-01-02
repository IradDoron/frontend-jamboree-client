import { includeSolvedQuestionsProps } from 'components/QuizTab/IncludeSolvedQuestions/types';
import { useStyles } from 'components/QuizTab/useStyles';

export const IncludeSolvedQuestions = ({
	checked,
	onChange,
}: includeSolvedQuestionsProps) => {
	const styles = useStyles();
	return (
		<label style={styles.labelStyles}>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				style={styles.inputCheckboxStyles}
			/>
			Include solved questions
		</label>
	);
};
