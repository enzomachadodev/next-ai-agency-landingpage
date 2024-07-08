import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primary: {
					100: "#FEE84C",
					200: "#FFD81A",
					300: "#E8D447",
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shimmer: {
					from: { backgroundPosition: "0 0" },
					to: { backgroundPosition: "-200% 0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				shimmer: "shimmer 2s linear infinite",
			},
			backgroundImage: {
				"hero-pattern": "url('/images/hero-pattern.png')",
				"hero-gradient": "url('/images/hero-gradient.png')",
				"footer-gradient": "url('/images/footer-gradient.png')",
			},
			boxShadow: {
				"inner-card": "inset 0px 0px 114px 0px rgba(255,216,26,0.1)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

