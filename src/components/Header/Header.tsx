import { Frontium } from 'components/Frontium';
import styles from 'components/Header/Header.module.scss';
import { QuizTab } from 'components/QuizTab';
import { SettingButton } from 'components/SettingButton';
import { SkillsTab } from 'components/SkillsTab';
import { StoreTab } from 'components/StoreTab';

export const Header = () => {
	return (
		<div className={styles.Header}>
			<Frontium />
			<div
				className={styles['tabs-container']}
				style={{
					width: '100%',
				}}
			>
				<StoreTab />
				<SkillsTab />
				<QuizTab />
			</div>

			<SettingButton />
		</div>
	);
};
