export interface ButtonProps {
	children: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	sx?: React.CSSProperties;
	isDisabled?: boolean;
}
