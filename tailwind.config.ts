import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "selector",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				heading: ["Source Code Pro", "sans-serif"],
				body: ["Source Sans Pro", "sans-serif"],
			},
			screens: {
				"2xs": "320px",
				xs: "375px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				"2xl": "1536px",
				"3xl": "1920px",
				"4xl": "2560px",
			},
			colors: {
				primary: "#3474F3",
				secondary: "#E3E8ED",
				background: "#F7F3F3",
				"text-primary": "#111827",
				"text-secondary": "#898989",
				"primary-dark": "#3474F3",
				"secondary-dark": "#172135",
				"background-dark": "#111827",
				"text-primary-dark": "#F7F3F3",
				"text-secondary-dark": "#ABADB2",
				yellow: "#FFD700",
			},
		},
	},
	plugins: [],
};
export default config;
