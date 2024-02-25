import { TiWeatherSunny } from "react-icons/ti";

type Props = {
	handleTheme: () => void;
	darkThemeActivated: boolean;
};

const ThemeSwitch = ({ handleTheme, darkThemeActivated }: Props) => {
	return (
		<TiWeatherSunny
			size={20}
			className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
			onClick={handleTheme}
		/>
	);
};

export default ThemeSwitch;
