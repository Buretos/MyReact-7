import { Header, UserBlock } from './components';
import styles from './app.module.css';
import { AppContext } from './context';

const getUserFromServer = () => ({
	id: 'alliase',
	name: 'Иван',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+7-999-999-9-9',
});

export const App = () => {
	const userData = getUserFromServer();

	return (
		<AppContext.Provider value={userData}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
			</div>
		</AppContext.Provider>
	);
};
