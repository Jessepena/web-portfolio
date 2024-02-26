import Link from "next/link";
import CustomPopover from "./CustomPopover";
import ThemeHandler from "./ThemeHandler";
import { BsGithub } from "react-icons/bs";

const Header = () => {
	return (
		<div className="h-[60px] fixed top-0 left-0 right-0 flex justify-center items-center gap-3 p-2 backdrop-blur-sm">
			<Link target="_blank" href="https://github.com/jessepena">
				<BsGithub
					size={20}
					className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
				/>
			</Link>
			<ThemeHandler />
			<CustomPopover />
		</div>
	);
};

export default Header;
