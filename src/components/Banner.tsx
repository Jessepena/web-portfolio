import Link from "next/link";

const Banner = () => {
	return (
		<div className="flex items-center justify-center rounded-md p-10 min-h-[340px] bg-secondary dark:bg-secondary-dark">
			<h1 className="text-3xl md:text-4xl font-bold text-center">
				Ready to start your next project?{" "}
				<Link href="/contact" className="text-link hover:underline">
					Get in touch with me!
				</Link>
			</h1>
		</div>
	);
};

export default Banner;
