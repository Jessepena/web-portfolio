import Badge from "./Badge";

const badgesList = [
	{
		title: "HTML",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
	},
	{
		title: "CSS",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
	},

	{
		title: "Javascript",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
	},
	{
		title: "Typescript",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
	},
	{
		title: "React.js",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	},
	{
		title: "Next.js",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
	},
	{
		title: "Angular",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
	},
	{
		title: "Node.js",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
	},
	{
		title: "Bootstrap",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
	},
	{
		title: "Tailwind CSS",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		title: "Git",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
	},
	{
		title: "Github",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
	},
	{
		title: "Gitlab",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
	},
	{
		title: "Bitbucket",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
	},
	{
		title: "Firebase",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
	},
	{
		title: "Jira",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
	},
	{
		title: "AWS",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
	},
	{
		title: "GraphQL",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
	},
	{
		title: "Gatsby",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg",
	},
	{
		title: "Material UI",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
	},

	{
		title: "ESlint",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg",
	},
	{
		title: "Jest",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
	},
];

const Hero = () => {
	return (
		<div className="flex flex-col gap-6 text-center">
			<h1 className="text-4xl font-bold font-heading">Hello, I'm Jesse Pena</h1>
			<p className="text-2xl font-bold text-text-secondary dark:text-text-secondary-dark">
				A Full Stack Engineer building scalable and user-friendly web
				applications for various clients and industries. I use Next.js/React,
				Tailwind CSS, and AWS to create interactive and engaging user
				interfaces, streamlined and responsive styling, scalable and efficient
				data management, analytics, and hosting.
			</p>
			<div className="flex justify-center items-center gap-2 flex-wrap">
				{badgesList.map((badge) => (
					<Badge key={badge.title} title={badge.title} imgUrl={badge.imgUrl} />
				))}
			</div>
		</div>
	);
};

export default Hero;
