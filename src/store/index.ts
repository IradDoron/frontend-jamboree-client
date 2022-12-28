import { atom } from 'recoil';
import { themes } from 'theme/themes';
import { Theme } from 'theme/types';

export const themeState = atom<Theme>({
	key: 'themeState',
	default: themes.space,
});

export const currentThemeNameState = atom<string>({
	key: 'currentThemeNameState',
	default: 'space',
});

export const frontiumAmountState = atom<number>({
	key: 'frontiumAmountState',
	default: 0,
});

export const skillsLevelState = atom({
	key: 'skillsLevelState',
	default: {
		HTML: 1,
		CSS: 1,
		JavaScript: 1,
		React: 1,
		Redux: 1,
		TypeScript: 1,
		jQuery: 1,
	},
});
