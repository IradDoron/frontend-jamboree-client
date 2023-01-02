import { QuestionsAmountProps as Props } from 'components/QuizTab/QuestionsAmount/types';
import { useStyles } from 'components/QuizTab/useStyles';

export const QuestionsAmount = ({ questionsAmount, onChange }: Props) => {
	const styles = useStyles();
	const { labelStyles, inputNumberStyles } = styles;
	return (
		<label style={labelStyles}>
			<input
				type="number"
				value={questionsAmount}
				onChange={onChange}
				style={inputNumberStyles}
			/>
			{questionsAmount}
		</label>
	);
};
