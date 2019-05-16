module.exports = {
    extends: [
        'eslint:recommended',
        'standard',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    rules: {
        // custom
        indent: [2, 4],
        'max-statements-per-line': [2, { max: 1 }],
        'prefer-arrow-callback': 1,
        'prefer-const': [2, { destructuring: 'all' }],
        semi: [2, 'always'],
        'space-before-function-paren': [ 2, { anonymous: 'never', named: 'never' } ],

        // eslint
        'comma-dangle': ['error', 'always-multiline'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'quote-props': ['error', 'as-needed'],
        'no-return-assign': 0,

        // import
        'import/no-webpack-loader-syntax': 0,
        'import/default': 1,
        'import/namespace': ['error', {
            allowComputed: true,
        }],
        'import/no-anonymous-default-export': ['error', {
            allowArray: true,
            allowArrowFunction: true,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowLiteral: false,
            allowObject: true,
        }],
        'import/extensions': ['error', 'never', {
            js: 'never',
            jsx: 'never',
            json: 'never',
        }],
    },
};
