import Link from "next/link";

const Portfolio = () => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold w-fit flex flex-col items-center">
				<div>
					My latest{" "}
					<Link href="/projects" className="text-link">
						projects
					</Link>
				</div>

				<span className="bg-primary block w-full h-2 rounded-md animate-underline mt-1" />
			</h1>
		</div>
	);
};

export default Portfolio;
