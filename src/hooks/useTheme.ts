import { useRecoilState } from 'recoil';
import { themeState } from 'store';
import { themes } from 'theme/themes';

export const useTheme = () => {
	const [theme, setTheme] = useRecoilState(themeState);

	const setCurrentTheme = (name: string) => {
		setTheme(themes[name]);
	};

	return { theme, setCurrentTheme };
};
