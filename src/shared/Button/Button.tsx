import { useTheme } from 'hooks/useTheme';
import styles from 'shared/Button/Button.module.scss';
import { ButtonProps } from 'shared/Button/Button.types';

export const Button = ({ children, onClick }: ButtonProps) => {
	const { theme } = useTheme();

	return (
		<button
			className={styles.button}
			onClick={onClick}
			style={{
				color: theme.textColor,
				backgroundColor: theme.primaryColor,
			}}
		>
			{children}
		</button>
	);
};
