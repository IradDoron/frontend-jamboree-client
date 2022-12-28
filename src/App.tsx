import { useRecoilValue } from 'recoil';

import styles from 'App.module.css';

import { Header } from 'components/Header';
import { Quiz } from 'components/Quiz';

import { useTheme } from 'hooks/useTheme';

import { questionsState } from 'store';

export const App = () => {
	const { theme } = useTheme();
	const questions = useRecoilValue(questionsState);
	return (
		<div
			className={styles.App}
			style={{
				backgroundColor: theme.backgroundColor,
			}}
		>
			<main
				className={styles['app-wrapper']}
				style={{
					color: theme.textColor,
				}}
			>
				<Header />
				{questions.length > 0 && <Quiz />}
			</main>
		</div>
	);
};
