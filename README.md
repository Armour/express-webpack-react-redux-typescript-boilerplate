# Express-Webpack-React-Typescript-HMR-Boilerplate
[![Dependency Status](https://gemnasium.com/badges/859f8694be0794a67d3a461d8d714091.svg)](https://gemnasium.com/github.com/Armour/Django-Webpack-React-Typescript-HMR-Boilerplate)

## Stack

- [x] [yarn](https://github.com/yarnpkg/yarn) as dependency manager
- [x] [gulp](https://github.com/gulpjs/gulp) as task runner
- [x] [webpack2](https://github.com/webpack/webpack) as module bundler
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

* `yarn` (recommended) or `npm`
* `python 3.6.0` and `virtualenv` 
    * Note: you can use `pyenv` to manage your different versions of python
* `postgresql` (or other database that you want)

Install [yarn](https://yarnpkg.com/en/docs/install#linux-tab) follows official documentation.

Install [pyenv](https://github.com/yyuu/pyenv) follows official documentation.


### Install project dependencies

Go to project root directory:

~~~bash
yarn
yarn global add gulp
~~~

If you meet permission problem for global install, check [this](https://github.com/yarnpkg/yarn/issues/1060#issuecomment-268160528) out.


### Set up python virtual environment

If you don't have python 3.6.0 installed, you can choose to use [pyenv](https://github.com/yyuu/pyenv)

~~~bash
brew install pyenv
pyenv install 3.6.0
pyenv local 3.6.0
~~~

After that, create a virtual python environment using python 3.6.0, naming the folder as `pyenv` which has been added to `.gitignore`

~~~bash
pip install virtualenv
virtualenv -p python3 pyenv
~~~

Source your virtualenv and install the required package through pip

~~~bash
source pyenv/bin/activate
pip install -r backend/requirements.txt
~~~


### Customize your django setting

~~~bash
vim backend/project_name/settings.py
~~~

You probably want to change:

1. Database Config
2. Timezone
3. Cache Method
4. Others

(if you are using `postgresql`, then create a user called `django` with `django` database, and the default setting is good to go, otherwise you may need to install database driver for your own database)


### Run gulp with webpack to generate bundle assets

**On development (with react-hot-reload):**

~~~bash
gulp
~~~

**On production (with uglify-js and other optimazitions):**

~~~bash
gulp --env production
~~~


### Run django backend server

~~~bash
cd backend
~~~

**On development:**

~~~bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
~~~

**On production:**

~~~bash
vim project_name/settings.py
~~~

Set `DEBUG` to `False`

~~~bash
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
# Setup Apache or Nginx to support static files here
python manage.py runserver
~~~

### Boilerplate setup tutorial step by step

I will write a tutorial about how to setup those stuffs together step by step asap :)

### If you prefer use Node.js as backend

Check my [another boilerplate]() with Node.js support!

### License

GPL-3.0 License
