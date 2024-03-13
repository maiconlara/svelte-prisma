/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito']
			},
			colors: {
				prisma: {
					300: '#996DFF',
					400: '#8257E6',
					500: '#7951d7',
					600: '#6142AA'
				}
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: 'false',
		base: 'false'
	}
};
