const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	parserOptions: {
		ecmaVersion: 2020
	},
	env: {
		node: true
	},
	rules: {}
};
