import { Button } from 'shared/Button';
import { TabButtonProps } from 'shared/TabButton/TabButton.types';

export const TabButton = ({ children, onClick }: TabButtonProps) => {
	return (
		<div>
			<Button onClick={onClick}>{children}</Button>
		</div>
	);
};
