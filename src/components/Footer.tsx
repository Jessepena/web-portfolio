import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="flex justify-center items-center gap-3 m-4">
			<a
				target="_blank"
				href="https://www.linkedin.com/in/jesse-pena-b95b631b7/"
			>
				<BsLinkedin
					size={20}
					className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
				/>
			</a>
			<a target="_blank" href="https://www.instagram.com/_jessepena_/">
				<BsInstagram
					size={20}
					className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
				/>
			</a>

			<a target="_blank" href="https://github.com/jessepena">
				<BsGithub
					size={20}
					className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
				/>
			</a>
		</div>
	);
};

export default Footer;
