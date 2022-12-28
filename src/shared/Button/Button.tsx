import { useTheme } from 'hooks/useTheme';
import styles from 'shared/Button/Button.module.css';
import { ButtonProps } from 'shared/Button/Button.types';

export const Button = ({ children, onClick, sx }: ButtonProps) => {
	const { theme } = useTheme();

	return (
		<button
			className={styles.button}
			onClick={onClick}
			style={{
				color: theme.textColor,
				backgroundColor: theme.primaryColor,
				...sx,
			}}
		>
			{children}
		</button>
	);
};
