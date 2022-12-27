import styles from 'components/Frontium/Frontium.module.scss';
import { useTheme } from 'hooks/useTheme';
import { useRecoilValue } from 'recoil';
import { frontiumAmountState } from 'store';

export const Frontium = () => {
	const frontiumAmount = useRecoilValue(frontiumAmountState);
	const { theme } = useTheme();

	return (
		<div className={styles.Frontium}>
			<h1
				style={{
					color: theme.textColor,
				}}
			>
				Frontium: {frontiumAmount}
			</h1>
		</div>
	);
};
