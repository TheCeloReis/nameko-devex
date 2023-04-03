module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['Amplitude Wide', 'sans-serif'],
		},
		extend: {
			colors: {
				text: '#35344C',
				background: '#FCFCFD',

				primary: '#3F25C8',
				'primary-light': '#474374',
				'primary-lighter': '#C3C1D7',
				'primary-lightest': '#F3F1FE',
			},
		},
	},
	plugins: [],
}
