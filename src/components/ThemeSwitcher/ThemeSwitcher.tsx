import { convertStringCase } from 'helpers/convertStringCase';
import { getThemesTitles } from 'helpers/getThemesTitles';
import { useTheme } from 'hooks/useTheme';

export const ThemeSwitcher = () => {
	const { setCurrentTheme } = useTheme();
	const themesTitles = getThemesTitles();

	return (
		<div>
			{themesTitles.map((title) => (
				<button key={title} onClick={() => setCurrentTheme(title)}>
					{convertStringCase(title, 'pascal')}
				</button>
			))}
		</div>
	);
};
