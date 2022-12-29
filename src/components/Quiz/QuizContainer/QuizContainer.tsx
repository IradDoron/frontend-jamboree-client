import { useTheme } from 'hooks/useTheme';

export interface QuizContainerProps {
	children: React.ReactNode;
	sx?: React.CSSProperties;
}

export const QuizContainer = ({ children, sx }: QuizContainerProps) => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				border: '4px solid ',
				width: '100%',
				gap: '16px',
				position: 'relative',

				borderColor: theme.secondaryColor,
				...sx,
			}}
		>
			{children}
		</div>
	);
};
