import { useState, useEffect } from 'react';
import { Header, UserBlock } from './components';
import { AppContext } from './context';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'alliase',
	name: 'Иван',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+7-999-999-9-9',
});

const getAnotherUserFromServer = () => ({
	id: 'alliasee',
	name: 'Василий',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+7-999-999-9-9',
});

export const App = () => {
	const [userData, setUserData] = useState({});

	const dispatch = (action) => {
		const { type, payload } = action;

		switch (type) {
			case 'SET_USER_DATA': {
				setUserData(payload);
				break;
			}
			default:
		}
	};

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		setUserData(userDataFromServer);
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		setUserData(anotherUserDataFromServer);
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
	);
};
