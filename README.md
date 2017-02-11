# Express-Webpack-React-Typescript-HMR-Boilerplate
[![Dependency Status](https://gemnasium.com/badges/eed19136f1fd6888e7a2ea6539feae5d.svg)](https://gemnasium.com/github.com/Armour/Express-Webpack-React-Typescript-HMR-Boilerplate)

## Stack

- [x] [express](http://expressjs.com/) as backend
- [x] [yarn](https://github.com/yarnpkg/yarn) as dependency manager
- [x] [gulp](https://github.com/gulpjs/gulp) as task runner
- [x] [webpack 2](https://github.com/webpack/webpack) as module bundler
- [x] [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) offers a dev middleware for webpack, which arguments a live bundle to a directory
- [x] [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) add hot reloading into an existing server without [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [x] followed [ES6 standard](https://github.com/lukehoban/es6features)
- [x] [babel](https://babeljs.io/) as ES6 to ES5 compiler
- [x] [react](https://facebook.github.io/react/) for building user interfaces.
- [x] [react-router](https://github.com/ReactTraining/react-router) for routing
- [x] [react-redux](https://github.com/reactjs/react-redux) the official react bindings for [redux](https://github.com/reactjs/redux) (a predictable state container for js apps)
- [x] [react-router-redux](https://github.com/reactjs/react-router-redux) to keep react-router and redux in sync 
- [x] [typescript](https://github.com/Microsoft/TypeScript) let's write future javascript => now!
- [x] [react-hot-loader 3](https://github.com/gaearon/react-hot-loader) for hot module reload! 
- [x] [editorconfig](http://editorconfig.org/) to maintain consistent coding styles between different editors and IDEs
- [x] [eslint](http://eslint.org/) to lint javascript files (.js, .jsx)
- [x] [tslint](https://palantir.github.io/tslint/) to lint typescript files (.ts, .tsx)
- [x] [stylelint](https://stylelint.io/) to lint style files (.css, .scss)
- [ ] [jest](https://facebook.github.io/jest/) for testing

## Install && Run

### Prerequisite

* `node`
* `yarn` (recommended) or `npm`
* `postgresql` (or other database that you want)

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
gulp --env production
```


### Boilerplate setup tutorial step by step

I will write a tutorial about how to setup those stuffs together step by step asap :)


### If you prefer to use Django as backend

Check my [another boilerplate](https://github.com/Armour/Django-Webpack-React-Typescript-HMR-Boilerplate) with Django support!


### License

GPL-3.0 License
