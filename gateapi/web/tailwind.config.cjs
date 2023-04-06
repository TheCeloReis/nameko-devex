module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['Amplitude Wide', 'sans-serif'],
			amplitudeBook: ['Amplitude Book', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				background: '#FCFCFD',
				'border-color': '#F3F1FE',

				'primary-darker': '#35344C',
				'primary-dark': '#474374',
				primary: '#3F25C8',
				'primary-light': '#745CF1',
				'primary-lighter': '#C3C1D7',
			},
		},
	},
	plugins: [],
}
