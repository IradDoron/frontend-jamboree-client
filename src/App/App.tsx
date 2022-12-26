import styles from 'App/App.module.scss';

import { Header } from 'components/Header';

export const App = () => {
	return (
		<div className={styles.App}>
			<main className={styles['app-wrapper']}>
				<Header />
			</main>
		</div>
	);
};
