/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 5s linear infinite',
				scroll: 'scroll 120s linear infinite'
			},
			colors: {
				gblue: '#3B71FE',
				ggreen: '#0F9D58',
				gred: '#DB4437',
				gyellow: '#F89B00'
			},
			fontFamily: {
				'google-sans': ['Google-sans', 'sans-serif']
			},
			keyframes: {
				scroll: {
					'0%': { 'margin-left': '100vw' },
					'100%': { 'margin-left': '-100%' }
				}
			},
			backgroundImage: {
				hero: "url('/svg/bg.svg')"
			}
		}
	},
	plugins: []
};
