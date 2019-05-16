# eslint-config-saribe

[![Greenkeeper badge](https://badges.greenkeeper.io/saribe/eslint-config-saribe.svg)](https://greenkeeper.io/) [![CircleCI](https://img.shields.io/circleci/project/github/saribe/eslint-config-saribe.svg)](https://circleci.com/gh/saribe/eslint-config-saribe) [![npm](https://img.shields.io/npm/v/eslint-config-saribe.svg)](https://www.npmjs.com/package/eslint-config-saribe)

> Lazy way to setup you eslint config

## Usage

```bash
npm i -D eslint-config-saribe
```

Add it to your `.eslintrc.js` file:

```json
{
  "extends": [
    "saribe"
  ]
}
```

Please feel free to fork and change 🙂

## Features

- Based on [eslint-config-standerd](https://github.com/standard/eslint-config-standard) and `eslint:recommended`
- [babel-eslint](https://github.com/babel/babel-eslint) for parsing
- Plugins
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/) to better control `import`/`export` statements

## License

[MIT](http://opensource.org/licenses/MIT)
