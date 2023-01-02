import { useTheme } from 'hooks/useTheme';

export const useStyles = () => {
	const { theme } = useTheme();
	const labelStyles: React.CSSProperties = {
		display: 'inline-block',
		padding: '10px 20px',
		margin: '8px',
		border: `1px solid ${theme.primaryColor}`,
		borderRadius: '4px',
		backgroundColor: theme.backgroundColor,
		cursor: 'pointer',
		transition: 'all 0.2s',
	};

	const inputCheckboxStyles: React.CSSProperties = {
		marginRight: '8px',
		width: '1.5rem',
		height: '1.5rem',
		border: `2px solid ${theme.primaryColor}`,
		borderRadius: '4px',
		padding: '4px',
		cursor: 'pointer',
	};

	const inputNumberStyles: React.CSSProperties = {
		width: '3rem',
		height: '1.5rem',
		border: `2px solid ${theme.primaryColor}`,
		borderRadius: '4px',
		padding: '4px',
		cursor: 'pointer',
	};

	const styles = {
		labelStyles,
		inputCheckboxStyles,
		inputNumberStyles,
	};

	return styles;
};
