import styles from 'shared/Button/Button.module.scss';

import { ButtonProps } from 'shared/Button/Button.types';

export const Button = ({ children }: ButtonProps) => {
	return <button className={`${styles.button}`}>{children}</button>;
};
