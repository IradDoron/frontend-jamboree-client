import { useTheme } from 'hooks/useTheme';

export interface QuizTagChipProps {
	name: string;
}

export const QuizTagChip = ({ name }: QuizTagChipProps) => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignContent: 'center',
				gap: '8px',
				padding: '8px',
				borderRadius: '8px',
				borderColor: theme.secondaryColor,
				borderStyle: 'solid',
				borderWidth: '2px',
			}}
		>
			<p>{name}</p>
		</div>
	);
};
