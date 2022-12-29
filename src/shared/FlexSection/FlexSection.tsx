export interface FlexSectionProps {
	children: React.ReactNode;
	gap?: number;
	sx?: React.CSSProperties;
}

export const FlexSection = ({ children, gap = 0, sx }: FlexSectionProps) => {
	return (
		<section
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignContent: 'center',
				gap: `${gap}px`,
				width: '100%',
				...sx,
			}}
		>
			{children}
		</section>
	);
};
