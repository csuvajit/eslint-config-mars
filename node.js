const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		es6: true,
		node: true
	},
	rules: {}
};
