import Link from "next/link";
import CustomPopover from "./CustomPopover";
import ThemeHandler from "./ThemeHandler";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "./NavLink";
import CustomButton from "./CustomButton";

export const navLinks = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "About",
		route: "/about",
	},
	{
		label: "Projects",
		route: "/projects",
	},
];

const Header = () => {
	return (
		<div className="h-[60px] fixed top-0 left-0 right-0 flex justify-center items-center gap-4 p-2 backdrop-blur-sm">
			<div className="hidden md:flex gap-4">
				{navLinks.map((link) => (
					<NavLink
						key={link.label}
						href={link.route}
						className="cursor-pointer fill-background-dark dark:fill-background hover:text-primary"
					>
						{link.label}
					</NavLink>
				))}
			</div>

			<Link target="_blank" href="https://github.com/jessepena">
				<BsGithub
					size={20}
					className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
				/>
			</Link>
			<ThemeHandler />
			<CustomPopover />
			<CustomButton />
		</div>
	);
};

export default Header;
