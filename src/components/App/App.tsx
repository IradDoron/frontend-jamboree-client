import styles from 'components/App/App.module.scss';

import { Button } from 'shared';

export const App = () => {
	return (
		<div className={styles.App}>
			<h1>Frontend Jamboree</h1>
			<h2>Coming soon</h2>
			<Button>Click me</Button>
		</div>
	);
};
