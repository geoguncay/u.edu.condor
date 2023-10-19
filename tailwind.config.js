/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#d5f8e2',
					100: '#b1eec8',
					200: '#8de4ad',
					300: '#6ad993',
					400: '#46cf78',
					500: '#22c55e',
					600: '#1c9f4c',
					700: '#15793a',
					800: '#0f5327',
					900: '#082d15',
					950: '#04160A',
				},
				textLight: '#ffffffde',
				textDark: '#16171b',
				bgDark: '#111827',
				bgLight: '#ffffff',
				brandPrimary: '#00D8A5',
			},
			backgroundImage: {
				warintza: "url('/src/assets/img/warintza.jpeg')",
			},
		},
	},
	plugins: [],
};
