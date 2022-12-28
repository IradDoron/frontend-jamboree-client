import { useTheme } from 'hooks/useTheme';
import styles from 'shared/Button/Button.module.scss';
import { ButtonProps } from 'shared/Button/Button.types';

export const Button = ({ children, onClick, sx, isDisabled }: ButtonProps) => {
	const { theme } = useTheme();

	return (
		<button
			className={styles.button}
			// onClick={isDisabled ? undefined : onClick} // TODO: on deployment use this line
			onClick={onClick}
			style={{
				color: theme.textColor,
				backgroundColor: theme.primaryColor,
				cursor: isDisabled ? 'not-allowed' : 'pointer',
				...sx,
			}}
		>
			{children}
		</button>
	);
};
