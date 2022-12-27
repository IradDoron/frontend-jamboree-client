import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentThemeNameState, themeState } from 'store';
import { themes } from 'theme/themes';

export const useTheme = () => {
	const [theme, setTheme] = useRecoilState(themeState);
	const setCurrentThemeName = useSetRecoilState(currentThemeNameState);

	const setCurrentTheme = (name: string) => {
		setTheme(themes[name]);
		setCurrentThemeName(name);
	};

	return { theme, setCurrentTheme };
};
