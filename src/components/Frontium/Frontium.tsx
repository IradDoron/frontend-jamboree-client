import styles from 'components/Frontium/Frontium.module.scss';
import { useRecoilValue } from 'recoil';
import { frontiumAmountState } from 'store';

export const Frontium = () => {
	const frontiumAmount = useRecoilValue(frontiumAmountState);

	return (
		<div className={styles.Frontium}>
			<h1>Frontium: {frontiumAmount}</h1>
		</div>
	);
};
