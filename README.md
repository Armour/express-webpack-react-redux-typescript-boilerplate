# Express-Webpack-React-Typescript-HMR-Boilerplate
[![Dependency Status](https://gemnasium.com/badges/eed19136f1fd6888e7a2ea6539feae5d.svg)](https://gemnasium.com/github.com/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate)

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
- [x] [typescript](https://github.com/Microsoft/TypeScript) - a typed superset of javascript that scales
- [x] [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - high quality TypeScript type definitions
- [x] [editorconfig](http://editorconfig.org/) - maintain consistent coding styles between different editors and IDEs
- [x] [eslint](http://eslint.org/) - lint javascript files (.js, .jsx)
- [x] [tslint](https://palantir.github.io/tslint/) - lint typescript files (.ts, .tsx)
- [x] [stylelint](https://stylelint.io/) - lint style files (.css, .scss)
- [x] [postgresql](https://www.postgresql.org/) - advanced open source database
- [x] [prismjs](https://github.com/PrismJS/prism) - code syntax highlight
- [ ] [jest](https://facebook.github.io/jest/) - testing
- [ ] [istanbul](https://github.com/gotwarlost/istanbul) - test coverage

## Install && Run

### Prerequisite

* `node`
* `yarn` (recommended) or `npm`
* `postgresql` or other databases

Install [yarn](https://yarnpkg.com/en/docs/install#linux-tab) follows official documentation.


### Install project dependencies

Go to project root directory:

```bash
yarn
yarn global add gulp
yarn global add babel-cli
```

If you meet permission problem for global install, check [this](https://github.com/yarnpkg/yarn/issues/1060#issuecomment-268160528) out.


### Run gulp tasks

**On development (with react-hot-reload):**

```bash
gulp
```

**On production (with uglify-js and other optimazitions):**

```bash
NODE_ENV=production gulp
```


### Boilerplate setup tutorial step by step

I will write a tutorial about how to setup those stuffs together step by step asap :)


### If you prefer to use Django as backend

Check my [another boilerplate](https://github.com/Armour/Django-Webpack-React-Typescript-HMR-Boilerplate) with Django support!


### License

MIT License
