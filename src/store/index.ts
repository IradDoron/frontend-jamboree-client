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
