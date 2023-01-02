import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button } from 'shared';
import { Modal } from 'shared/Modal';
import { TabButton } from 'shared/TabButton';

import {
	currentQuestionIndexState,
	isQuizStartedState,
	quizFilteredQuestionsState,
	quizQuestionsState,
	skillsLevelState,
	solvedQuestionsIdsState,
} from 'store';

import { Question } from 'types';

import { questionsSet } from 'data/questionsSet';

import { getQuizQuestions } from 'helpers/getQuizQuestions';

import { DEFAULT_FILTERS } from 'global';

import { AvailableQuestionsNumber } from 'components/QuizTab/AvailableQuestionsNumber';
import { QuestionsAmount } from 'components/QuizTab/QuestionsAmount';

export const QuizTab = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const skillsLevel = useRecoilValue(skillsLevelState);
	const solvedQuestionsIds = useRecoilValue(solvedQuestionsIdsState);
	const quizFilteredQuestions = useRecoilValue(quizFilteredQuestionsState);
	const setQuizQuestions = useSetRecoilState(quizQuestionsState);
	const setIsQuizStarted = useSetRecoilState(isQuizStartedState);
	const setCurrentQuestionIndex = useSetRecoilState(currentQuestionIndexState);

	const [tempAllQuizQuestions, setTempAllQuizQuestions] = useState<Question[]>(
		[]
	);

	const [questionsAmount, setQuestionsAmount] = useState(10);

	useEffect(() => {
		const questions = getQuizQuestions(
			questionsSet,
			solvedQuestionsIds,
			questionsAmount,
			'challenge',
			DEFAULT_FILTERS,
			skillsLevel
		);
		setTempAllQuizQuestions(questions);
	}, [skillsLevel, solvedQuestionsIds, questionsAmount]);

	const handleQuestionsAmountChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = Number(e.target.value);
		setQuestionsAmount(value);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleGetQuizClick = () => {
		setIsModalOpen(false);
		setQuizQuestions(tempAllQuizQuestions);
		setIsQuizStarted(true);
		setCurrentQuestionIndex(0);
	};

	return (
		<>
			<TabButton onClick={handleOpenModal}>Quiz</TabButton>
			<Modal isOpen={isModalOpen} closeModal={setIsModalOpen} title="Quiz">
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '8px',
						fontSize: '1.5rem',
					}}
				></div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '16px',
						width: '100%',
					}}
				>
					<AvailableQuestionsNumber
						availableQuestionsNumber={quizFilteredQuestions.length}
					/>
					<QuestionsAmount
						questionsAmount={questionsAmount}
						onChange={handleQuestionsAmountChange}
					/>
				</div>

				<Button onClick={handleGetQuizClick}>Get Quiz</Button>
			</Modal>
		</>
	);
};
