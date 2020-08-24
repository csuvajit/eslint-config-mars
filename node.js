const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		es2020: true,
		node: true
	},
	rules: {}
};
