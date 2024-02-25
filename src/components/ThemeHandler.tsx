"use client";
import { useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import useLocalStorage from "@/hooks/useLocalStorage";

const ThemeHandler = () => {
	const [theme, setTheme] = useLocalStorage(
		"theme",
		typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	);
	const [darkThemeActivated, setDarkThemeActivated] = useLocalStorage(
		"checkedTheme",
		typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const htmlElement = document.querySelector("html");
			if (htmlElement) htmlElement.className = theme;
		}
	}, [theme]);

	const handleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
		theme === "light"
			? setDarkThemeActivated(false)
			: setDarkThemeActivated(true);
	};

	return (
		<ThemeSwitch
			handleTheme={handleTheme}
			darkThemeActivated={darkThemeActivated}
		/>
	);
};

export default ThemeHandler;
