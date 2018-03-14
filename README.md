# Express Webpack React Redux Typescript Boilerplate

[![Dependency Status](https://david-dm.org/Armour/express-webpack-react-redux-typescript-boilerplate/status.svg)](https://david-dm.org/Armour/express-webpack-react-redux-typescript-boilerplate)
[![DevDependency Status](https://david-dm.org/Armour/express-webpack-react-redux-typescript-boilerplate/dev-status.svg)](https://david-dm.org/Armour/express-webpack-react-redux-typescript-boilerplate?type=dev)
[![CircleCI](https://circleci.com/gh/Armour/express-webpack-react-redux-typescript-boilerplate/tree/master.svg?style=shield&circle-token=2b60a5e48d4f53d2b115efd948022c7df72a805b)](https://circleci.com/gh/Armour/express-webpack-react-redux-typescript-boilerplate/tree/master)
[![Appveyor](https://ci.appveyor.com/api/projects/status/kgnfn2r88h90cgx5?svg=true)](https://ci.appveyor.com/api/projects/status/kgnfn2r88h90cgx5?svg=true)
[![Coverage Status](https://coveralls.io/repos/github/Armour/express-webpack-react-redux-typescript-boilerplate/badge.svg?branch=master&t=H7lCqC)](https://coveralls.io/github/Armour/express-webpack-react-redux-typescript-boilerplate?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Example

* [Demo Page](https://express-react-typescript.herokuapp.com/)
  * A page contains the classic [Todo List](https://express-react-typescript.herokuapp.com/react) as follows:

    ![Demo page](https://user-images.githubusercontent.com/5276065/30264746-b629fa26-968e-11e7-82ca-090b4c8c5580.jpg)

* [Cocomic](https://cocomic.azendless.com/)
  * An open-source platform for comic/manga collaboration (SFU CMPT470 course project, no typescript). [source code here](https://github.com/Armour/Cocomic).

    ![Cocomic](https://user-images.githubusercontent.com/5276065/34108373-bb440764-e43a-11e7-98f8-7c94d08e2575.jpg)

## Stack

* [x] [express](http://expressjs.com/) - backend
* [x] [yarn](https://github.com/yarnpkg/yarn) - dependency manager
* [x] [gulp](https://github.com/gulpjs/gulp) - task runner
* [x] [materialize](http://materializecss.com/) - a modern responsive front-end framework based on Material Design
* [x] [sass](https://github.com/sass/sass) - CSS pre-processors
* [x] [postcss](https://github.com/postcss/postcss) - CSS post-processor
* [x] [webpack 3](https://github.com/webpack/webpack) - module bundler
* [x] [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - offers a dev middleware for webpack, which arguments a live bundle to a directory
* [x] [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) - add hot reloading into an existing server without [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [x] followed [ES6 standard](https://github.com/lukehoban/es6features)
* [x] [babel](https://babeljs.io/) - compile ES6 to ES5
* [x] [react](https://facebook.github.io/react/) - building user interfaces
* [x] [react-hot-loader 3](https://github.com/gaearon/react-hot-loader) - hot module reload!
* [x] [react-router 4](https://github.com/ReactTraining/react-router) - routing
* [x] [react-redux](https://github.com/reactjs/react-redux) - the official react bindings for [redux](https://github.com/reactjs/redux) (a predictable state container for js apps)
* [x] [connected-react-router](https://github.com/supasate/connected-react-router) - a redux binding for react-router 4, currently a replacement for [react-router-redux v5](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
* [x] [immutable.js](https://github.com/facebook/immutable-js/) - persistent Immutable data structures for react redux state management
* [x] [Typescript](https://github.com/Microsoft/TypeScript) - a typed superset of javascript that scales
* [x] [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - high quality TypeScript type definitions
* [x] [editorconfig](http://editorconfig.org/) - maintain consistent coding styles between different editors and IDEs
* [x] [eslint](http://eslint.org/) - lint javascript files (.js, .jsx)
* [x] [tslint](https://palantir.github.io/tslint/) - lint typescript files (.ts, .tsx)
* [x] [stylelint](https://stylelint.io/) - lint style files (.css, .scss)
* [x] [postgresql](https://www.postgresql.org/) - advanced open source database
* [x] [prismjs](https://github.com/PrismJS/prism) - code syntax highlight
* [x] [jest](https://facebook.github.io/jest/) - painless javascript testing
* [x] [coveralls](https://coveralls.io/) - test coverage
* [x] [husky](https://github.com/typicode/husky) - git hooks
* [x] [circle-ci 2](https://circleci.com/) - continuous integration tool for testing and deployment
* [x] [heroku](https://www.heroku.com/) - a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
* [x] [docker](https://github.com/docker/docker) - the open-source application container engine

## How to run the example code

### Prerequisite

* `node`
* `yarn` (recommended) or `npm`
* `docker` (recommended) with `docker-compose`

### Quickest way

The easiest way to run the example project is to use `docker-compose`:

```bash
docker-compose up --build
```

that's it :)

You can also follow instructions below if you want customize it.

### Install project dependencies

Go to project root directory:

```bash
yarn install
yarn global add gulp
```

If you find permission problem when trying to install yarn globally, check [this](https://github.com/yarnpkg/yarn/issues/1060#issuecomment-268160528) out.

### Setup database and session store

You can either run `postgresql` or `redis` using docker images:

```bash
docker-compose up -d postgres redis
```

or maintain it by yourself, if so, make sure you set the right config in `backend/config.json`.

### Build & Run

On development (with react-hot-reload and redux-devtools):

```bash
gulp
```

On production (with uglify-js and other optimazitions):

```bash
NODE_ENV=production gulp
```

## Profile assets bundle

Thanks to [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), we can analyze and then optimize our assets bundle through [DLL Plugin](https://webpack.js.org/plugins/dll-plugin/).

```bash
gulp profile
```

## Run test

```bash
gulp test
```

## Code coverage

```bash
gulp coveralls
```

## Deployment

```bash
gulp deploy
```

## Contributing

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :D

## License

MIT License
