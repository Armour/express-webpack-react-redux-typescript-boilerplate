import fs from 'fs';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import childProcess from 'child_process';
import eslint from 'gulp-eslint';
import tslint from 'gulp-tslint';
import stylelint from 'gulp-stylelint';

const spawn = childProcess.spawn;
const isProduction = process.env.NODE_ENV === 'production';

// Run eslint
gulp.task('eslint', () =>
  gulp.src(['**/*.js', '**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError()),
);

// Run tslint
gulp.task('tslint', () =>
  gulp.src(['**/*.ts', '**/*.tsx', '!node_modules/**'])
    .pipe(tslint({
      formatter: 'codeFrame',
    }))
    .pipe(tslint.report()),
);

// Run stylelint
gulp.task('stylelint', () =>
  gulp.src(['**/*.scss', '**/*.css', '!node_modules/**', '!**/materialize/**'])
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    })),
);

// Clean webpack generated files
gulp.task('clean', () => del(['frontend/dist']));

// Build dll reference files
gulp.task('webpack:build-dll', (callback) => {
  const buildDll = spawn('yarn', ['run', 'build-dll'], { stdio: 'inherit' });
  buildDll.on('close', (code) => {
    console.log(`build-dll child process exited with code ${code}`);
    callback();
  });
  buildDll.on('error', (err) => {
    callback(err);
  });
});

// Generate webpack asset bundles for production
gulp.task('webpack:build-prod', (callback) => {
  const buildProd = spawn('yarn', ['run', 'build-prod'], { stdio: 'inherit' });
  buildProd.on('close', (code) => {
    console.log(`build-prod child process exited with code ${code}`);
    callback();
  });
  buildProd.on('error', (err) => {
    callback(err);
  });
});

// Profiling webpack asset bundle
gulp.task('webpack:profiling', (callback) => {
  const profiling = spawn('yarn', ['run', 'profiling'], { stdio: 'inherit' });
  profiling.on('close', (code) => {
    console.log(`profiling child process exited with code ${code}`);
    callback();
  });
  profiling.on('error', (err) => {
    callback(err);
  });
});

// Run server
gulp.task('express:run-server', (callback) => {
  const runServer = spawn('yarn', ['run', 'server'], { stdio: 'inherit' });
  runServer.on('close', (code) => {
    console.log(`run-server child process exited with code ${code}`);
    callback();
  });
  runServer.on('error', (err) => {
    callback(err);
  });
});

// Generate asset bundles and run server
gulp.task('build & run', (callback) => {
  fs.exists('frontend/dist', (exists) => {
    const taskList = [
      'express:run-server',
    ];
    if (isProduction) {
      taskList.unshift('webpack:build-prod');
    }
    if (!exists) {
      taskList.unshift('webpack:build-dll');
    }
    runSequence(...taskList, callback);
  });
});

// Profiling
gulp.task('profiling', (callback) => {
  fs.exists('frontend/dist', (exists) => {
    const taskList = [
      'webpack:profiling',
    ];
    if (!exists) {
      taskList.unshift('webpack:build-dll');
    }
    runSequence(...taskList, callback);
  });
});

// Test
gulp.task('test', (callback) => {
  const buildProd = spawn('yarn', ['run', 'test'], { stdio: 'inherit' });
  buildProd.on('close', (code) => {
    console.log(`test child process exited with code ${code}`);
    callback();
  });
  buildProd.on('error', (err) => {
    callback(err);
  });
});

// Coveralls
gulp.task('coveralls', (callback) => {
  const buildProd = spawn('yarn', ['run', 'coveralls'], { stdio: 'inherit' });
  buildProd.on('close', (code) => {
    console.log(`coveralls child process exited with code ${code}`);
    callback();
  });
  buildProd.on('error', (err) => {
    callback(err);
  });
});

// Default task
// 1. eslint
// 2. tslint
// 3. stylelint
// 4. generate asset bundles and run server
gulp.task('default', (callback) => {
  runSequence('eslint', 'tslint', 'stylelint', 'build & run', callback);
});
