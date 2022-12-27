import { useRecoilValue } from 'recoil';

import { convertStringCase } from 'helpers/convertStringCase';
import { getThemesTitles } from 'helpers/getThemesTitles';
import { useTheme } from 'hooks/useTheme';
import { Button } from 'shared';
import { currentThemeNameState } from 'store';

import styles from 'components/ThemeSwitcher/ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
	const { setCurrentTheme } = useTheme();
	const themesTitles = getThemesTitles();
	const { theme } = useTheme();
	const currentThemeName = useRecoilValue(currentThemeNameState);

	return (
		<div className={styles.container}>
			{themesTitles.map((title) => {
				const isCurrentTheme = title === currentThemeName;
				return (
					<Button
						key={title}
						onClick={() => setCurrentTheme(title)}
						sx={{
							outline: isCurrentTheme
								? `4px solid ${theme.secondaryColor}`
								: 'none',
						}}
					>
						{convertStringCase(title, 'pascal')}
					</Button>
				);
			})}
		</div>
	);
};
