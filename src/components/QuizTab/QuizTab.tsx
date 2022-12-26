import { useState } from 'react';
import { Modal } from 'shared/Modal';
import { TabButton } from 'shared/TabButton';

export const QuizTab = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<TabButton onClick={handleOpenModal}>Quiz</TabButton>
			<Modal isOpen={isModalOpen} closeModal={setIsModalOpen}>
				<h1>QuizTab</h1>
			</Modal>
		</>
	);
};
