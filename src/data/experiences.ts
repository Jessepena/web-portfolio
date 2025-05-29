type Experience = {
	name: string;
	position: string;
	imgUrl: string;
	date: string;
	responsibilities: string[];
	url: string;
};

export const experienceList: Experience[] = [
	{
		name: "Adtechnacity",
		position: "Software Engineer",
		imgUrl:
			"https://media.licdn.com/dms/image/v2/C4D0BAQGF-m4DWXglTg/company-logo_200_200/company-logo_200_200/0/1630527635154/adtechnacity_logo?e=2147483647&v=beta&t=l7y-rPtdxT3xgJuAj_xmzZjjA8-GFa3_2zVZMZvs4vo",
		date: "May 2023 – Present",
		responsibilities: [
			"Implemented the frontend of the Firefox extension using React, ensuring smooth user interactions and seamless integration with the browser.",
			"Utilized Tailwind CSS to create consistent and responsive UI components, maintaining a clean and modular codebase for easy maintenance.",
			"Established seamless communication between content and background scripts in the Firefox extension, ensuring efficient data flow and synchronization.",
			"Developed and integrated content management systems (CMS) to enable easy content updates and streamlined internationalization (i18n) support for multiple languages.",
		],
		url: "https://adtechnacity.com/",
	},
	{
		name: "Epam Systems",
		position: "Software Engineer",
		imgUrl:
			"https://media.licdn.com/dms/image/v2/D4E0BAQERhwCA4aBweA/company-logo_400_400/company-logo_400_400/0/1706845800358/epam_systems_logo?e=1749081600&v=beta&t=4NRaNh6N6enNpTuz-mFaw_vxwIuUlrygIiNozTNAVGw",
		date: "November 2021 – May 2023",
		responsibilities: [
			"Played an instrumental role in the development and implementation of new and existing features for Walgreens, adhering closely to specified requirements and project timelines.",
			"Demonstrated expertise in refactoring and debugging existing tests within an extensive codebase, comprising more than 140 test suites and approximately 800 test cases, resulting in test coverage exceeding 80%.",
			"Utilized the ChatGPT API to dynamically generate informative and engaging blog posts in MD format, adeptly handling various topics and keywords.",
			"Leveraged the powerful capabilities of the OpenAI and Unsplash APIs to generate and search for premium quality images, enriching the overall user experience with visually captivating content.",
		],
		url: "https://www.epam.com/",
	},
	{
		name: "Kleio Technology",
		position: "Frontend Developer",
		imgUrl:
			"https://media.licdn.com/dms/image/D4E0BAQGl82lSU9Kr-w/company-logo_200_200/0/1681734225428/kleio_technology_llc_logo?e=2147483647&v=beta&t=CKi46jzneXZi1JxzN74Tbs1Zzms4-rKBegMzozBkpn0",
		date: "March 2021 – November 2021",
		responsibilities: [
			"Orchestrated a seamless migration of the application from Angular 7 to the latest version, Angular 12, ensuring enhanced functionality and up-to-date features.",
			"Implemented Angular's efficient change detection strategies, resulting in substantial performance optimization and improved responsiveness of the application.",
			"Successfully executed the migration of the application from Bootstrap 3 to Bootstrap 5, improving the visual aesthetics, responsiveness, and performance of the user interface.",
			"Utilized Angular’s lazy loading resulting in a significantly faster initial load time of the web application.",
		],
		url: "https://kleiotechnology.com/",
	},
];
