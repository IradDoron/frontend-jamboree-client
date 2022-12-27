import { useState } from 'react';
import { Modal } from 'shared/Modal';
import { TabButton } from 'shared/TabButton';

export const SkillsTab = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<TabButton onClick={handleOpenModal}>Skills</TabButton>
			<Modal
				isOpen={isModalOpen}
				closeModal={setIsModalOpen}
				title="Skills"
			></Modal>
		</>
	);
};
