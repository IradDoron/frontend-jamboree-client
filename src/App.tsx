import styles from 'App.module.scss';

import { Header } from 'components/Header';

import { useTheme } from 'hooks/useTheme';

export const App = () => {
	const { theme } = useTheme();
	return (
		<div
			className={styles.App}
			style={{
				backgroundColor: theme.backgroundColor,
			}}
		>
			<main className={styles['app-wrapper']}>
				<Header />
			</main>
		</div>
	);
};
