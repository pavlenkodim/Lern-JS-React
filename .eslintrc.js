module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		// 'eslint:recommended',
		'plugin:react/recommended'
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		// 'quotes': [
		// 	'error',
		// 	'single'
		// ],
		'semi': [
			'error',
			'always'
		],
		// 'no-unused-vars': [
		// 	'warn'
		// ]
	}
};
