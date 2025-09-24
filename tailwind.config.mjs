/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			}
		},	
	},
	plugins: [],
}
