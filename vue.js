const path = require('path');

module.exports = {
	extends: ['plugin:vue/recommended', path.join(__dirname, 'index.js')],
	env: {
		browser: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'never' }]
	}
};
