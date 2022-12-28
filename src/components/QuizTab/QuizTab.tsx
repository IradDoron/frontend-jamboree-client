import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button } from 'shared';
import { Modal } from 'shared/Modal';
import { TabButton } from 'shared/TabButton';

import {
	questionsState,
	skillsLevelState,
	solvedQuestionsIdsState,
} from 'store';

import { questionsSet } from 'data/questionsSet';

import { getQuizQuestions } from 'helpers/getQuizQuestions';

export const QuizTab = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const skillsLevel = useRecoilValue(skillsLevelState);
	const solvedQuestionsIds = useRecoilValue(solvedQuestionsIdsState);
	const setQuestions = useSetRecoilState(questionsState);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleGetQuizClick = () => {
		const questions = getQuizQuestions(
			questionsSet,
			solvedQuestionsIds,
			10,
			'challenge',
			undefined,
			skillsLevel
		);
		setQuestions(questions);
		setIsModalOpen(false);
	};
	return (
		<>
			<TabButton onClick={handleOpenModal}>Quiz</TabButton>
			<Modal isOpen={isModalOpen} closeModal={setIsModalOpen} title="Quiz">
				<Button onClick={handleGetQuizClick}>Get Quiz</Button>
			</Modal>
		</>
	);
};
