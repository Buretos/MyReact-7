import { Header, UserBlock } from './components';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'alliase',
	name: 'Иван',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+7-999-999-9-9',
});

export const App = () => {
	const { name, age, email, phone } = getUserFromServer();

	return (
		<div className={styles.app}>
			<Header name={name} age={age} email={email} phone={phone} />
			<hr />
			<UserBlock />
		</div>
	);
};
