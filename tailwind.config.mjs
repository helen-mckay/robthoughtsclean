/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'sm': '300px',
			'md': '600px',
			'l': '900px',
			'xl': '1200px'
		},
		spacing: {
			'1': '4px',
			'2': '8px',
			'3': '16px',
			'4': '32px',
			'5': '64px'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
}
