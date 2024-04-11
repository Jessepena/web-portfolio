"use server";

import { EmailTemplate, EmailTemplateProps } from "@/components/EmailTemplate";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: EmailTemplateProps) => {
	try {
		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: "jessepenadev@gmail.com",
			subject: `${formData.firstName} - Email from Portfolio Website`,
			react: EmailTemplate(formData) as ReactElement,
		});
		if (error) {
			console.log(error);
		}

		return data;
	} catch (error) {
		console.log(error);
	}
};
