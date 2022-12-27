import { useTheme } from 'hooks/useTheme';
import { CSSTransition } from 'react-transition-group';
import styles from 'shared/Modal/Modal.module.scss';
import { ModalProps } from 'shared/Modal/Modal.types';

export const Modal = ({ children, closeModal, isOpen, title }: ModalProps) => {
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
						backgroundColor: theme.backgroundColor,
					}}
				>
					<div className={styles.container}>
						<button
							className={styles['close-button']}
							style={{
								color: theme.textColor,
							}}
							onClick={handleCloseClick}
						>
							<svg
								width="100"
								height="100"
								style={{
									transform: 'scale(0.5)',
								}}
							>
								<path
									d="M 10 10 L 90 90"
									stroke={theme.secondaryColor}
									stroke-width="8"
								/>
								<path
									d="M 10 90 L 90 10"
									stroke={theme.secondaryColor}
									stroke-width="8"
								/>
							</svg>
						</button>
						<h1
							className={styles.title}
							style={{
								color: theme.textColor,
							}}
						>
							{title}
						</h1>
						{children}
					</div>
				</div>
			</CSSTransition>
		</>
	);
};
