/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'slate-header': '#43403ef2',
			'white': '#fff',
			'red': '#ff0000',
			'black': '#000'
		},
		fontFamily: {
			'header-font': 'Open Sans',
		}
	},
	plugins: [],

}
