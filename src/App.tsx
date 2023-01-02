import { useRecoilValue, useSetRecoilState } from 'recoil';

import styles from 'App.module.css';

import { Header } from 'components/Header';
import { Quiz } from 'components/Quiz';

import { useTheme } from 'hooks/useTheme';

import { useEffect } from 'react';
import {
	questionsState,
	quizFilteredQuestionsState,
	quizQuestionsState,
} from 'store';

import { questionsSet } from 'data/questionsSet';

export const App = () => {
	const { theme } = useTheme();
	const questions = useRecoilValue(questionsState);
	const setQuestions = useSetRecoilState(questionsState);
	const setQuizFilteredQuestions = useSetRecoilState(
		quizFilteredQuestionsState
	);
	const setQuizQuestions = useSetRecoilState(quizQuestionsState);

	useEffect(() => {
		setQuestions(questionsSet);
		setQuizFilteredQuestions(questionsSet);
		setQuizQuestions(questionsSet);
	}, [setQuestions, setQuizFilteredQuestions, setQuizQuestions]);

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
