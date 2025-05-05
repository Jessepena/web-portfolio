import Link from "next/link";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-3 m-4">
			<div className="flex justify-center items-center gap-3 ">
				<Link
					target="_blank"
					href="https://www.linkedin.com/in/jesse-pena-dev/"
				>
					<BsLinkedin
						size={20}
						className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
					/>
				</Link>
				<Link target="_blank" href="https://www.instagram.com/_jessepena_/">
					<BsInstagram
						size={20}
						className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
					/>
				</Link>

				<Link target="_blank" href="https://github.com/jessepena">
					<BsGithub
						size={20}
						className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
					/>
				</Link>
			</div>
			<div>© 2025 Jesse Pena. All rights reserved.</div>
		</div>
	);
};

export default Footer;
