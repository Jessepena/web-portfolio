import Link from "next/link";

const projectList = [
	{
		title: "HTML",
		imgUrl:
			"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
	},
];

const Portfolio = () => {
	return (
		<div className="flex flex-col gap-4 ">
			<h1 className="text-3xl font-bold">
				My latest{" "}
				<Link href="/projects" className="text-link">
					projects
				</Link>
			</h1>
		</div>
	);
};

export default Portfolio;
