import { Theme } from 'theme/types';

export const themes: { [name: string]: Theme } = {
	space: {
		primaryColor: '#2196f3',
		secondaryColor: '#f44336',
		accentColor: '#ffeb3b',
		backgroundColor: '#000000',
		textColor: '#ffffff',
	},
	nature: {
		primaryColor: '#8bc34a',
		secondaryColor: '#f4e336',
		accentColor: '#ff9800',
		backgroundColor: '#4caf50',
		textColor: '#ffffff',
	},
	ocean: {
		primaryColor: '#00bcd4',
		secondaryColor: '#9c27b0',
		accentColor: '#ffeb3b',
		backgroundColor: '#212121',
		textColor: '#ffffff',
	},
	desert: {
		primaryColor: '#fdd835',
		secondaryColor: '#f44336',
		accentColor: '#9c27b0',
		backgroundColor: '#795548',
		textColor: '#ffffff',
	},
	fantasy: {
		primaryColor: '#9c27b0',
		secondaryColor: '#4caf50',
		accentColor: '#ff9800',
		backgroundColor: '#212121',
		textColor: '#ffffff',
	},
	winter: {
		primaryColor: '#2196f3',
		secondaryColor: '#f44336',
		accentColor: '#ffeb3b',
		backgroundColor: '#ffffff',
		textColor: '#212121',
	},
};
