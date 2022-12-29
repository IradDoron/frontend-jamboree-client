import { useTheme } from 'hooks/useTheme';

export interface QuizSkillChipProps {
	name: string;
	level: number;
}

export const QuizSkillChip = ({ name, level }: QuizSkillChipProps) => {
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
				backgroundColor: theme.secondaryColor,
			}}
		>
			<p>{name}</p>
			<p>{level}</p>
		</div>
	);
};
