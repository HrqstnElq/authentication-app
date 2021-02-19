const colors = require("tailwindcss/colors");
module.exports = {
	purge: {
		enabled: false,
		content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
	},
	darkMode: false,
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			blue: colors.blue,
			rose: colors.rose,
			cyan: colors.cyan,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
		},
	},
	variants: {},
	plugins: [],
};
