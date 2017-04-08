# Express-Webpack-React-Typescript-HMR-Boilerplate

[![Build Status](https://travis-ci.com/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate.svg?token=xzmwu2pcJ1tBo5AwTZV3&branch=master)](https://travis-ci.com/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate)
[![Dependency Status](https://david-dm.org/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate/status.svg)](https://david-dm.org/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate)
[![DevDependency Status](https://david-dm.org/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate/dev-status.svg)](https://david-dm.org/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate/badge.svg?branch=master&t=H7lCqC)](https://coveralls.io/github/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate?branch=master)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Stack

- [x] [express](http://expressjs.com/) - backend
- [x] [yarn](https://github.com/yarnpkg/yarn) - dependency manager
- [x] [gulp](https://github.com/gulpjs/gulp) - task runner
- [x] [materialize](http://materializecss.com/) - a modern responsive front-end framework based on Material Design
- [x] [sass](https://github.com/sass/sass) - CSS pre-processors
- [x] [postcss](https://github.com/postcss/postcss) - CSS post-processor
- [x] [webpack 2](https://github.com/webpack/webpack) - module bundler
- [x] [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - offers a dev middleware for webpack, which arguments a live bundle to a directory
- [x] [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) - add hot reloading into an existing server without [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [x] followed [ES6 standard](https://github.com/lukehoban/es6features)
- [x] [babel](https://babeljs.io/) - compile ES6 to ES5
- [x] [react](https://facebook.github.io/react/) - building user interfaces
- [x] [react-hot-loader 3](https://github.com/gaearon/react-hot-loader) - hot module reload!
- [x] [react-router](https://github.com/ReactTraining/react-router) - routing
- [x] [react-redux](https://github.com/reactjs/react-redux) - the official react bindings for [redux](https://github.com/reactjs/redux) (a predictable state container for js apps)
- [x] [react-router-redux](https://github.com/reactjs/react-router-redux) - keep react-router and redux in sync
- [x] [Typescript](https://github.com/Microsoft/TypeScript) - a typed superset of javascript that scales
- [x] [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - high quality TypeScript type definitions
- [x] [editorconfig](http://editorconfig.org/) - maintain consistent coding styles between different editors and IDEs
- [x] [eslint](http://eslint.org/) - lint javascript files (.js, .jsx)
- [x] [tslint](https://palantir.github.io/tslint/) - lint typescript files (.ts, .tsx)
- [x] [stylelint](https://stylelint.io/) - lint style files (.css, .scss)
- [x] [postgresql](https://www.postgresql.org/) - advanced open source database
- [x] [prismjs](https://github.com/PrismJS/prism) - code syntax highlight
- [x] [jest](https://facebook.github.io/jest/) - painless javascript testing
- [x] [coveralls](https://coveralls.io/) - test coverage
- [x] [husky](https://github.com/typicode/husky) - git hooks
- [x] [travis-ci](https://travis-ci.org/) - continuous integration tool for testing and deployment

## Install && Run

### Prerequisite

- `node`
- `yarn` (recommended) or `npm`
- `postgresql` or other databases

Install [yarn](https://yarnpkg.com/en/docs/install#linux-tab) follows official documentation.

### Install project dependencies

Go to project root directory:

```bash
yarn
yarn global add gulp
bash patch.sh
```

If you meet permission problem when try to install yarn globally, check [this](https://github.com/yarnpkg/yarn/issues/1060#issuecomment-268160528) out.

### Build & Run

**On development (with react-hot-reload):**

```bash
gulp
```

**On production (with uglify-js and other optimazitions):**

```bash
NODE_ENV=production gulp
```

### Run test

```bash
yarn test
```

### Code coverage

```bash
yarn coveralls
```

### Boilerplate setup tutorial step by step

I will write a tutorial about how to setup those stuffs together step by step asap :)

### If you prefer to use Django as backend

Check my [another boilerplate](https://github.com/Armour/Django-Webpack-React-Typescript-HMR-Boilerplate) with Django support!

### License

MIT License
