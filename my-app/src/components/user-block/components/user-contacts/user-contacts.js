export const UserContacts = ({ email, phone }) => {
	return (
		<div>
			<h3>Контакты:</h3>
			<div>Почта: {email}</div>
			<div>Телефоон: {phone}</div>
		</div>
	);
};
