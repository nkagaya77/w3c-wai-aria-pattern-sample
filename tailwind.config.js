const plugin = require("tailwindcss/plugin")

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			rotate: {
				135: "135deg",
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".fill-opacity-0": {
					"fill-opacity": "0",
				},
				".fill-opacity-1": {
					"fill-opacity": "1",
				},

				".color-green-500": {
					color: "#22c55e",
				},
			})
		}),
	],
}
