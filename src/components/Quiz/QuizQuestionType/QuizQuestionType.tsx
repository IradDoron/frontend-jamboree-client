import { useTheme } from 'hooks/useTheme';

export interface QuizQuestionTypeProps {
	children: React.ReactNode;
}

export const QuizQuestionType = ({ children }: QuizQuestionTypeProps) => {
	const { theme } = useTheme();
	return (
		<p
			style={{
				fontSize: '1.6rem',
				overflow: 'break-word',
				margin: '0 24px',
				textShadow: `0 0 4px ${theme.secondaryColor}`,
			}}
		>
			{children}
		</p>
	);
};
