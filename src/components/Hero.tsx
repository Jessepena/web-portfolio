import Badge from "./Badge";

const Hero = () => {
	return (
		<div className="flex flex-col gap-6 text-center">
			<h1 className="text-4xl font-bold font-heading">
				Hello, I'm <br /> Jesse Pena
			</h1>
			<p className="text-2xl font-body text-text-secondary text-justify">
				Lorem ipsum dolor sit amet consectetur. Mi placerat nascetur magna sit
				cursus. Aliquet sed pharetra erat et hendrerit leo ut. Iaculis felis
				ornare viverra in fringilla tempor tellus. Integer rutrum sagittis lacus
				sapien sed.
			</p>
			<Badge />
		</div>
	);
};

export default Hero;
