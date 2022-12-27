import { useState } from 'react';
import { Modal } from 'shared/Modal';
import { TabButton } from 'shared/TabButton';

export const StoreTab = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<TabButton onClick={handleOpenModal}>Store</TabButton>
			<Modal
				isOpen={isModalOpen}
				closeModal={setIsModalOpen}
				title="Store"
			></Modal>
		</>
	);
};
