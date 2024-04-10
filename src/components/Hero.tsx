import Badge from "./Badge";
import { skillsList } from "@/data/skills";

const Hero = () => {
	return (
		<div className="flex flex-col gap-6 text-center px-4 lg:px-32 xl:px-72">
			<h1 className="text-4xl font-bold">Hello, I&apos;m Jesse Pena</h1>
			<p className="text-2xl font-bold text-text-secondary dark:text-text-secondary-dark text-justify">
				A Full Stack Engineer building scalable and user-friendly web
				applications for various clients and industries. I use Next.js/React,
				Tailwind CSS, and AWS to create interactive and engaging user
				interfaces, streamlined and responsive styling, scalable and efficient
				data management, analytics, and hosting.
			</p>
			<div className="flex justify-center items-center gap-2 flex-wrap">
				{skillsList.map((badge) => (
					<Badge
						key={badge.title}
						title={badge.title}
						imgUrl={badge.imgUrl}
						url={badge.url}
						animated
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;
