module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			lineHeight: {
				16: '4rem',
			},
			textColor: {
				primary: '#409EFF',
			},
			gridTemplateColumns: {
				24: 'repeat(24, minmax(0, 1fr))',
			},

			gridColumn: {
				'span-7': 'span 7 / span 7',
				'span-9': 'span 9 / span 9',
				'span-10': 'span 10 / span 10',
				'span-12': 'span 12 / span 12',
				'span-14': 'span 14 / span 14',
			},
		},
	},
	plugins: [],
}
