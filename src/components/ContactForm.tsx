"use client";

import { sendEmail } from "@/lib/action";
import Link from "next/link";
import { useRef } from "react";
import { EmailTemplateProps } from "./EmailTemplate";
import { useAlert } from "next-alert";
import { Alerts } from "next-alert";

const ContactForm = () => {
	const { addAlert } = useAlert();
	const formRef = useRef<HTMLFormElement>(null);

	const obSubmit = async (e: any) => {
		e.preventDefault();
		try {
			if (!formRef.current) return;
			const formData = new FormData(formRef.current);

			const data: EmailTemplateProps = Object.fromEntries(
				formData.entries()
			) as any;

			const response = await sendEmail(data);

			if (response) {
				formRef.current.reset();
				addAlert("Email", "Email was sent successfully", "success");
			} else addAlert("Email", "Error sending email", "error");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<Alerts
				position="bottom-right"
				direction="right"
				timer={5000}
				className="rounded-md relative z-50 !w-80"
			/>
			<div className="w-full md:w-2/3 px-4 py-8 bg-secondary dark:bg-secondary-dark rounded-lg shadow-lg">
				<div className="mb-6">
					<h1 className="text-3xl font-bold w-fit flex flex-col items-center">
						Contact me
						<span className="bg-primary block w-full h-2 rounded-md animate-underline mt-1 mb-4" />
					</h1>
					<p>
						Send an email to{" "}
						<Link
							href="mailto:jessepenadev@gmail.com"
							className="font-bold hover:text-primary"
						>
							jessepenadev@gmail.com
						</Link>{" "}
						or use the form below to send a message with your questions, project
						ideas.
					</p>
				</div>
				<form ref={formRef} onSubmit={obSubmit}>
					<div className="flex flex-wrap -mx-2">
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label htmlFor="firstName">First name</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								placeholder="Jesse"
								required
								className="h-10 mt-1 block w-full rounded-md shadow-sm px-3 dark:text-text-primary"
							/>
						</div>
						<div className="w-full md:w-1/2 px-2 mb-4">
							<label htmlFor="lastName">Last name</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Pena"
								required
								className="h-10 mt-1 w-full rounded-md shadow-sm px-3 dark:text-text-primary"
							/>
						</div>
					</div>
					<div className="mb-4">
						<label htmlFor="phone">Phone</label>
						<input
							type="text"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="786-874-4148"
							required
							className="h-10 mt-1 w-full rounded-md shadow-sm px-3 dark:text-text-primary"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="Jessepenadev@gmail.com"
							className="h-10 mt-1 w-full rounded-md shadow-sm px-3 dark:text-text-primary"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							placeholder="How can I work with you?"
							required
							className="mt-1 w-full rounded-md shadow-sm px-3 py-2 dark:text-text-primary"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-primary hover:bg-link text-background py-2 px-4 rounded"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
