const rules = {
	'accessor-pairs': 0,
	'array-bracket-newline': [
		'error',
		'consistent'
	],
	'array-bracket-spacing': [
		'error',
		'never',
		{
			'singleValue': false,
			'objectsInArrays': false,
			'arraysInArrays': false
		}
	],
	'array-callback-return': 'error',
	'array-element-newline': 0,
	'arrow-body-style': [
		'error',
		'as-needed'
	],
	'arrow-parens': [
		'error',
		'as-needed',
		{
			'requireForBlockBody': false
		}
	],
	'arrow-spacing': [
		'error',
		{
			'before': true,
			'after': true
		}
	],
	'block-scoped-var': 'error',
	'block-spacing': [
		'error',
		'always'
	],
	'brace-style': [
		'error',
		'1tbs',
		{
			'allowSingleLine': true
		}
	],
	'callback-return': 0,
	'camelcase': 0,
	'capitalized-comments': 0,
	'class-methods-use-this': 0,
	'comma-dangle': [
		'error',
		'never'
	],
	'comma-spacing': [
		'error',
		{
			'before': false,
			'after': true
		}
	],
	'comma-style': [
		'error',
		'last'
	],
	'complexity': 0,
	'computed-property-spacing': [
		'error',
		'never'
	],
	'consistent-return': 0,
	'consistent-this': [
		'error',
		'self'
	],
	'constructor-super': 'error',
	'curly': [
		'error',
		'multi-line',
		'consistent'
	],
	'default-case': 0,
	'dot-location': [
		'error',
		'property'
	],
	'dot-notation': [
		'error',
		{
			'allowKeywords': true,
			'allowPattern': '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)'
		}
	],
	'eol-last': [
		'error',
		'always'
	],
	'eqeqeq': [
		'error',
		'smart'
	],
	'for-direction': 0,
	'func-call-spacing': [
		'error',
		'never'
	],
	'func-name-matching': [
		'warn',
		'always'
	],
	'func-names': [
		'warn',
		'as-needed'
	],
	'func-style': 0,
	'function-paren-newline': [
		'error',
		'consistent'
	],
	'generator-star-spacing': [
		'error',
		'before'
	],
	'getter-return': 0,
	'global-require': 0,
	'guard-for-in': 'warn',
	'handle-callback-err': 0,
	'id-blacklist': 0,
	'id-length': 0,
	'id-match': 0,
	'indent': [
		'error',
		'tab',
		{
			'SwitchCase': 1
		}
	],
	'init-declarations': 0,
	'jsx-quotes': [
		'error',
		'prefer-double'
	],
	'key-spacing': [
		'error',
		{
			'beforeColon': false,
			'afterColon': true,
			'mode': 'strict'
		}
	],
	'keyword-spacing': [
		'error',
		{
			'overrides': {
				'if': {
					'after': true
				},
				'for': {
					'after': true
				},
				'while': {
					'after': true
				},
				'catch': {
					'after': true
				},
				'switch': {
					'after': true
				}
			}
		}
	],
	'line-comment-position': 0,
	'linebreak-style': [
		'error',
		'unix'
	],
	'lines-around-comment': 0,
	'lines-between-class-members': [
		'error',
		'always',
		{
			'exceptAfterSingleLine': true
		}
	],
	'max-depth': 0,
	'max-len': 0,
	'max-lines': 0,
	'max-nested-callbacks': 0,
	'max-params': 0,
	'max-statements': 0,
	'max-statements-per-line': [
		'error',
		{
			'max': 1
		}
	],
	'multiline-comment-style': 0,
	'multiline-ternary': [
		'error',
		'always-multiline'
	],
	'new-cap': 0,
	'new-parens': 'error',
	'newline-per-chained-call': [
		'error',
		{
			'ignoreChainWithDepth': 3
		}
	],
	'no-alert': 'error',
	'no-array-constructor': 0,
	'no-await-in-loop': 0,
	'no-bitwise': 0,
	'no-buffer-constructor': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-catch-shadow': 'error',
	'no-class-assign': 'warn',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': 'warn',
	'no-confusing-arrow': 0,
	'no-console': 0,
	'no-const-assign': 'error',
	'no-constant-condition': 0,
	'no-control-regex': 0,
	'no-debugger': 'error',
	'no-delete-var': 'error',
	'no-div-regex': 0,
	'no-dupe-args': 'error',
	'no-dupe-class-members': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-duplicate-imports': [
		'error',
		{
			'includeExports': false
		}
	],
	'no-else-return': 'warn',
	'no-empty': 0,
	'no-empty-character-class': 'error',
	'no-empty-function': 0,
	'no-empty-pattern': 0,
	'no-eq-null': 'warn',
	'no-eval': 'warn',
	'no-ex-assign': 0,
	'no-extend-native': 'warn',
	'no-extra-bind': 0,
	'no-extra-boolean-cast': 0,
	'no-extra-label': 'warn',
	'no-extra-parens': [
		'warn',
		'all',
		{
			'nestedBinaryExpressions': false
		}
	],
	'no-extra-semi': 'error',
	'no-fallthrough': 0,
	'no-floating-decimal': 'error',
	'no-func-assign': 0,
	'no-global-assign': 0,
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 0,
	'no-implied-eval': 'error',
	'no-inline-comments': 0,
	'no-inner-declarations': 0,
	'no-invalid-regexp': 'warn',
	'no-invalid-this': 0,
	'no-irregular-whitespace': [
		'error',
		{
			'skipStrings': true,
			'skipComments': true,
			'skipRegExps': true,
			'skipTemplates': true
		}
	],
	'no-iterator': 0,
	'no-label-var': 'error',
	'no-labels': 0,
	'no-lone-blocks': 0,
	'no-lonely-if': 'error',
	'no-loop-func': 0,
	'no-magic-numbers': 0,
	'no-mixed-operators': 'error',
	'no-mixed-requires': 'error',
	'no-mixed-spaces-and-tabs': [
		'error',
		'smart-tabs'
	],
	'no-multi-assign': 'warn',
	'no-multi-spaces': [
		'error',
		{
			'ignoreEOLComments': true
		}
	],
	'no-multi-str': 'error',
	'no-multiple-empty-lines': 'error',
	'no-negated-condition': 'warn',
	'no-nested-ternary': 0,
	'no-new': 0,
	'no-new-func': 'warn',
	'no-new-object': 'error',
	'no-new-require': 'error',
	'no-new-symbol': 'warn',
	'no-new-wrappers': 'warn',
	'no-obj-calls': 'warn',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-param-reassign': 0,
	'no-path-concat': 'warn',
	'no-plusplus': 0,
	'no-process-env': 0,
	'no-process-exit': 0,
	'no-proto': 0,
	'no-prototype-builtins': 0,
	'no-redeclare': 'error',
	'no-regex-spaces': 'warn',
	'no-restricted-globals': 0,
	'no-restricted-imports': 0,
	'no-restricted-modules': 0,
	'no-restricted-properties': 0,
	'no-restricted-syntax': 0,
	'no-return-assign': 0,
	'no-return-await': 'warn',
	'no-script-url': 0,
	'no-self-assign': 'error',
	'no-self-compare': 'warn',
	'no-sequences': 'error',
	'no-shadow': 0,
	'no-shadow-restricted-names': 'error',
	'no-sparse-arrays': 'warn',
	'no-sync': 0,
	'no-tabs': 0,
	'no-template-curly-in-string': 'error',
	'no-ternary': 0,
	'no-this-before-super': 'error',
	'no-throw-literal': 'error',
	'no-trailing-spaces': 'error',
	'no-undef': 'error',
	'no-undef-init': 0,
	'no-undefined': 0,
	'no-underscore-dangle': 0,
	'no-unexpected-multiline': 'error',
	'no-unmodified-loop-condition': 0,
	'no-unneeded-ternary': 0,
	'no-unreachable': 'warn',
	'no-unsafe-finally': 'warn',
	'no-unsafe-negation': 'error',
	'no-unused-expressions': 0,
	'no-unused-labels': 'error',
	'no-unused-vars': 'warn',
	'no-use-before-define': 'error',
	'no-useless-call': 0,
	'no-useless-computed-key': 'error',
	'no-useless-concat': 'warn',
	'no-useless-constructor': 'error',
	'no-useless-escape': 0,
	'no-useless-rename': 'error',
	'no-useless-return': 'warn',
	'no-var': 'error',
	'no-void': 0,
	'no-warning-comments': 0,
	'no-whitespace-before-property': 'error',
	'no-with': 'error',
	'nonblock-statement-body-position': 0,
	'object-curly-newline': [
		'error',
		{
			'multiline': true,
			'consistent': true
		}
	],
	'object-curly-spacing': [
		'error',
		'always'
	],
	'object-property-newline': 0,
	'object-shorthand': [
		'error',
		'always'
	],
	'one-var': [
		'error',
		'never'
	],
	'one-var-declaration-per-line': 0,
	'operator-assignment': [
		'error',
		'always'
	],
	'operator-linebreak': [
		'error',
		'after',
		{
			'overrides': {
				'?': 'before',
				':': 'before'
			}
		}
	],
	'padded-blocks': [
		'error',
		'never'
	],
	'padding-line-between-statements': 0,
	'prefer-arrow-callback': 'error',
	'prefer-const': [
		'error',
		{
			'destructuring': 'all'
		}
	],
	'prefer-destructuring': [
		'error',
		{
			'VariableDeclarator': {
				'array': false,
				'object': true
			},
			'AssignmentExpression': {
				'array': true,
				'object': false
			}
		}
	],
	'prefer-numeric-literals': 0,
	'prefer-promise-reject-errors': 'error',
	'prefer-rest-params': 'warn',
	'prefer-spread': 'error',
	'prefer-template': 'warn',
	'quote-props': [
		'error',
		'consistent-as-needed',
		{
			'keywords': true,
			'unnecessary': true,
			'numbers': false
		}
	],
	'quotes': [
		'error',
		'single',
		{
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}
	],
	'radix': 'error',
	'require-await': 0,
	'require-jsdoc': 0,
	'require-yield': 'warn',
	'rest-spread-spacing': [
		'error',
		'never'
	],
	'semi': [
		'error',
		'always',
		{
			'omitLastInOneLineBlock': false
		}
	],
	'semi-spacing': [
		'error',
		{
			'before': false,
			'after': true
		}
	],
	'semi-style': [
		'error',
		'last'
	],
	'sort-imports': 0,
	'sort-keys': 0,
	'sort-vars': 0,
	'space-before-blocks': [
		'error',
		'always'
	],
	'space-before-function-paren': [
		'error',
		{
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		}
	],
	'space-in-parens': [
		'error',
		'never'
	],
	'space-infix-ops': [
		'error',
		{
			'int32Hint': true
		}
	],
	'space-unary-ops': [
		'error',
		{
			'words': true,
			'nonwords': false
		}
	],
	'spaced-comment': [
		'error',
		'always'
	],
	'strict': [
		'error',
		'never'
	],
	'switch-colon-spacing': [
		'error',
		{
			'after': true,
			'before': false
		}
	],
	'symbol-description': 'warn',
	'template-curly-spacing': [
		'error',
		'never'
	],
	'template-tag-spacing': [
		'error',
		'never'
	],
	'unicode-bom': [
		'error',
		'never'
	],
	'use-isnan': 'error',
	'valid-jsdoc': [
		'warn',
		{
			'requireReturn': false,
			'requireReturnDescription': false,
			'preferType': {
				'String': 'string',
				'Number': 'number',
				'Boolean': 'boolean',
				'Symbol': 'symbol',
				'function': 'Function',
				'object': 'Object',
				'date': 'Date',
				'error': 'Error'
			}
		}
	],
	'valid-typeof': 'error',
	'vars-on-top': 0,
	'wrap-iife': [
		'error',
		'inside'
	],
	'wrap-regex': 0,
	'yield-star-spacing': [
		'error',
		'before'
	],
	'yoda': 'error'
};

module.exports = {
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: Object.assign(rules, {})
};
