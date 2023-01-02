import { IncludeUnsolvedQuestionsProps } from 'components/QuizTab/IncludeUnsolvedQuestions/types';
import { useStyles } from 'components/QuizTab/useStyles';

export const IncludeUnsolvedQuestions = ({
	checked,
	onChange,
}: IncludeUnsolvedQuestionsProps) => {
	const styles = useStyles();
	const { labelStyles, inputCheckboxStyles } = styles;

	return (
		<label style={labelStyles}>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				style={inputCheckboxStyles}
			/>
			Include unsolved questions
		</label>
	);
};
