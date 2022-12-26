import { useTheme } from 'hooks/useTheme';
import { CSSTransition } from 'react-transition-group';
import styles from 'shared/Modal/Modal.module.scss';
import { ModalProps } from 'shared/Modal/Modal.types';

export const Modal = ({ children, closeModal, isOpen }: ModalProps) => {
	const { theme } = useTheme();
	const handleCloseClick = () => {
		closeModal(false);
	};

	return (
		<>
			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames={{
					enter: styles['fade-enter'],
					enterActive: styles['fade-enter-active'],
					exit: styles['fade-exit'],
					exitActive: styles['fade-exit-active'],
				}}
				unmountOnExit
			>
				<div
					className={styles.Modal}
					style={{
						backgroundColor: theme.secondaryColor,
					}}
				>
					<button className={styles['close-button']} onClick={handleCloseClick}>
						X
					</button>
					{children}
				</div>
			</CSSTransition>
		</>
	);
};
