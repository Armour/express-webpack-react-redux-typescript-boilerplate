import fs from 'fs';
import del from 'del';
import runSequence from 'run-sequence';
import childProcess from 'child_process';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import tslint from 'gulp-tslint';
import stylelint from 'gulp-stylelint';

const { spawn } = childProcess;
const isProduction = process.env.NODE_ENV === 'production';
const yarn = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';

const path = {
  dist: 'frontend/dist',
  src: {
    js: '**/*.js',
    jsx: '**/*.jsx',
    ts: '**/*.ts',
    tsx: '**/*.tsx',
    css: '**/*.css',
    scss: '**/*.scss',
  },
  exclude: {
    node_modules: '!node_modules/**',
  },
};

const tasks = {
  eslint: 'eslint',
  tslint: 'tslint',
  stylelint: 'stylelint',
  clean: 'clean',
  buildDll: 'yarn:run-build-dll',
  buildProd: 'yarn:run-build-prod',
  profile: 'yarn:run-profile',
  server: 'yarn:run-server',
  test: 'yarn:run-test',
  coverage: 'yarn:run-coverage',
  deploy: 'yarn:run-deploy',
  build: 'build',
  start: 'build & run server',
};

// Run eslint
gulp.task(tasks.eslint, () =>
  gulp.src([path.src.js, path.src.jsx]) // respect .eslintignore
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError()));

// Run tslint
gulp.task(tasks.tslint, () =>
  gulp.src([path.src.ts, path.src.tsx, path.exclude.node_modules])
    .pipe(tslint({ formatter: 'codeFrame' }))
    .pipe(tslint.report()));

// Run stylelint
gulp.task(tasks.stylelint, () =>
  gulp.src([path.src.css, path.src.scss]) // respect ignoreFiles in .stylelintrc
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    })));

// Clean webpack generated files
gulp.task(tasks.clean, () => del([path.dist, '.awcache', 'coverage']));

// Yarn task generator
const generateTask = (taskName, args) => {
  gulp.task(taskName, (callback) => {
    const proc = spawn(yarn, args, { stdio: 'inherit' });
    proc.on('close', (code) => {
      console.log(`child process exited with code ${code}`); // eslint-disable-line no-console
      callback();
    });
    proc.on('error', (err) => {
      callback(err);
    });
  });
};

// Build dll reference files
generateTask(tasks.buildDll, ['run', 'build-dll']);

// Generate webpack asset bundles for production
generateTask(tasks.buildProd, ['run', 'build-prod']);

// Profile webpack asset bundle
generateTask(tasks.profile, ['run', 'profile']);

// Run server
generateTask(tasks.server, ['run', 'server']);

// Test
generateTask(tasks.test, ['run', 'test']);

// Coverage
generateTask(tasks.coverage, ['run', 'coverage']);

// Deployment
generateTask(tasks.deploy, ['run', 'deploy']);

// Generate asset bundles
gulp.task(tasks.build, (callback) => {
  fs.exists(path.dist, (exists) => {
    const taskList = [];
    if (isProduction) {
      taskList.unshift(tasks.buildProd);
    }
    if (!exists) {
      taskList.unshift(tasks.buildDll);
    }
    if (taskList.length > 0) {
      runSequence(...taskList, callback);
    } else {
      callback();
    }
  });
});

// Generate asset bundles and run server
gulp.task(tasks.start, (callback) => {
  runSequence(tasks.build, tasks.server, callback);
});

// Default task
// 1. eslint
// 2. tslint
// 3. stylelint
// 4. generate asset bundles and run server
gulp.task('default', (callback) => {
  runSequence(tasks.eslint, tasks.tslint, tasks.stylelint, tasks.start, callback);
});
