export interface QuizQuestionTextProps {
	children: React.ReactNode;
}

export const QuizQuestionText = ({ children }: QuizQuestionTextProps) => {
	return (
		<p
			style={{
				fontSize: '1.5rem',
				overflow: 'break-word',
				margin: '0 24px',
				lineHeight: '2rem',
			}}
		>
			{children}
		</p>
	);
};
