export interface ModalProps {
	children?: React.ReactNode;
	closeModal: (newState: boolean) => void;
	isOpen: boolean;
	title: string;
}
