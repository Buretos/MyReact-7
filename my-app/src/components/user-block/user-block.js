import { UserPersonalInfo, UserContacts } from './components';

export const UserBlock = ({ name, age, email, phone }) => {
	return (
		<div>
			<h2>Посльзователь:</h2>
			<UserPersonalInfo name={name} age={age} />
			<UserContacts email={email} phone={phone} />
		</div>
	);
};
