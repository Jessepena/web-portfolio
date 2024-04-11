export interface EmailTemplateProps {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstName,
	lastName,
	phoneNumber,
	email,
	message,
}) => (
	<div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
		<h2>Contact Information</h2>
		<p>
			<strong>Name:</strong> {firstName} {lastName}
		</p>
		<p>
			<strong>Email:</strong> {email}
		</p>
		<p>
			<strong>Phone Number:</strong> {phoneNumber}
		</p>
		<hr />
		<h2>Message</h2>
		<p>{message}</p>
	</div>
);
