# express-webpack-react-redux-typescript-boilerplate

[![Dependency Status](https://david-dm.org/Armour/express-webpack-react-redux-typescript-boilerplate/status.svg)](https://david-dm.org/Armour/express-webpack-react-redux-typescript-boilerplate)
[![CircleCI](https://circleci.com/gh/Armour/express-webpack-react-redux-typescript-boilerplate/tree/master.svg?style=shield)](https://circleci.com/gh/Armour/express-webpack-react-redux-typescript-boilerplate/tree/master)
[![Appveyor](https://ci.appveyor.com/api/projects/status/github/Armour/express-webpack-react-redux-typescript-boilerplate?svg=true&branch=master)](https://ci.appveyor.com/api/projects/status/github/Armour/express-webpack-react-redux-typescript-boilerplate?svg=true&branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Armour/express-webpack-react-redux-typescript-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/Armour/express-webpack-react-redux-typescript-boilerplate?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Template from jarvis](https://img.shields.io/badge/Hi-Jarvis-ff69b4.svg)](https://github.com/Armour/Jarvis)

## Example

* [Demo Page](https://express-react-typescript.herokuapp.com/) - contains classic todo list, async server call, and 404 page with random [moe images](https://github.com/Armour/express-webpack-react-redux-typescript-boilerplate/tree/master/frontend/src/pages/NotFoundPage/assets/images). (Support multi-language, currently English, Chinese, and Japanese)

  ![Home Page](https://user-images.githubusercontent.com/5276065/44188928-402d7800-a0d5-11e8-8445-0c0dece815c2.png)

  ![React Page](https://user-images.githubusercontent.com/5276065/44188929-402d7800-a0d5-11e8-8580-f9a330765f6a.png)

  ![404 Page](https://user-images.githubusercontent.com/5276065/44188930-402d7800-a0d5-11e8-919c-a4baa2c969ab.png)

## Stack

* [x] [yarn](https://github.com/yarnpkg/yarn) - dependency manager
* [x] [express](http://expressjs.com/) - node.js web framework for backend
* [x] [postgresql](https://www.postgresql.org/) - advanced open source database
* [x] [materialize](http://materializecss.com/) - a modern responsive front-end framework based on Material Design
* [x] [sass](https://github.com/sass/sass) - CSS pre-processors
* [x] [postcss](https://github.com/postcss/postcss) - CSS post-processor
* [x] [css-modules](https://github.com/css-modules/css-modules) - for default scoped/local css
* [x] [typescript](https://github.com/Microsoft/TypeScript) - a typed superset of javascript that scales
* [x] [webpack 4](https://github.com/webpack/webpack) - module bundler
* [x] [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - serves a webpack app in development mode with hot reload
* [x] followed [ES6 standard](https://github.com/lukehoban/es6features)
* [x] [babel](https://babeljs.io/) - a JavaScript compiler that compile ES6 to ES5
* [x] [react](https://facebook.github.io/react/) - a JavaScript library for building user interfaces
* [x] [react-hot-loader 4](https://github.com/gaearon/react-hot-loader) - hot module reload!
* [x] [react-router 4](https://github.com/ReactTraining/react-router) - declarative routing for React
* [x] [react-redux 6](https://github.com/reactjs/react-redux) - the official react bindings for [redux 4](https://github.com/reactjs/redux) (a predictable state container for js apps)
* [x] [react-saga](https://github.com/redux-saga/redux-saga/) - make redux asynchronous flows easy to read, write and test, the replacement for [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [x] [connected-react-router 6](https://github.com/supasate/connected-react-router) - a redux binding for react-router 4, the replacement for [react-router-redux v5](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
* [x] [react-i18next](https://github.com/i18next/react-i18next) - internationalization for react done right
* [x] [immutable.js](https://github.com/facebook/immutable-js/) - persistent Immutable data structures for react redux state management
* [x] [editorconfig](http://editorconfig.org/) - maintain consistent coding styles between different editors and IDEs
* [x] [eslint](http://eslint.org/) - lint javascript files (.js, .jsx)
* [x] [tslint](https://palantir.github.io/tslint/) - lint typescript files (.ts, .tsx)
* [x] [stylelint](https://stylelint.io/) - lint style files (.css, .scss)
* [x] [commitlint](https://github.com/marionebl/commitlint) - lint git commit messages
* [x] [jest](https://facebook.github.io/jest/) - painless javascript testing
* [x] [coveralls](https://coveralls.io/) - test coverage
* [x] [husky](https://github.com/typicode/husky) - git hooks
* [x] [circle-ci 2](https://circleci.com/) - continuous integration tool for testing and deployment
* [x] [heroku](https://www.heroku.com/) - a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
* [x] [docker](https://github.com/docker/docker) - the open-source application container engine
* [x] [RESTful API design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design) - follow RESTful api design best practice

## How to run the example code

### Prerequisite

* `yarn` or `npm`
* (optional) `docker` with `docker-compose`

### Quickest way

The easiest way to run the example project is to use `docker-compose`:

```bash
docker-compose up --build
```

that's it :)

You can also follow instructions below if you want to customize it.

### Install project dependencies

Go to project root directory:

```bash
yarn install
```

If you find permission problem when trying to install yarn globally, check [this](https://github.com/yarnpkg/yarn/issues/1060#issuecomment-268160528) out.

### Setup database and session store

You can either

* setup `postgresql` and `redis` using docker images:

```bash
docker-compose up -d postgres redis
```

or

* maintain it by yourself, if so, make sure you set the right config in `backend/config.json`.

### Build & Run

On development (with hot reload):

```bash
yarn dev
```

On production (with [terser](https://github.com/terser-js/terser) and other optimazitions):

```bash
yarn prod
```

## Profile assets bundle

Thanks to [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), we can analyze and then optimize our assets bundle through [DLL Plugin](https://webpack.js.org/plugins/dll-plugin/).

```bash
yarn profile
```

## Run test

```bash
yarn test
```

## Code coverage

```bash
yarn coverage
```

## Deployment

Every push on master branch will trigger [Github Actions](.github/main.workflow) for heroku deployment.

## Contributing

See [CONTRIBUTING.md](https://github.com/Armour/express-webpack-react-redux-typescript-boilerplate/blob/master/.github/CONTRIBUTING.md)

## License

[MIT License](https://github.com/Armour/express-webpack-react-redux-typescript-boilerplate/blob/master/LICENSE)
