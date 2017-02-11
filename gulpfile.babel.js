import gulp from 'gulp';
import yargs from 'yargs';
import del from 'del';
import runSequence from 'run-sequence';
import childProcess from 'child_process';
import eslint from 'gulp-eslint';
import tslint from 'gulp-tslint';
import stylelint from 'gulp-stylelint';

const exec = childProcess.exec;
const spawn = childProcess.spawn;
const isProduction = yargs.argv.env === 'production';

// Run eslint
gulp.task('eslint', () =>
  gulp.src(['**/*.js', '**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format('codeFrame'))
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
gulp.task('webpack:clean', () => del(['frontend/dist', 'webpack-stats.*.json']));

// Build dll reference files
gulp.task('webpack:build-dll', ['webpack:clean'], (callback) => {
  exec('npm run build-dll', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

// Generate webpack asset bundles for production
gulp.task('webpack:build-prod', ['webpack:build-dll'], (callback) => {
  exec('npm run build-prod', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

// Run devolopment server
gulp.task('express:run-dev', ['webpack:build-dll'], (callback) => {
  const runDev = spawn('npm', ['run', 'run-dev']);
  runDev.stdout.on('data', (data) => {
    const slicedData = data.slice(0, -1);
    console.log(`${slicedData}`);
  });
  runDev.stderr.on('data', (data) => {
    console.log(`${data}`);
  });
  runDev.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  runDev.on('error', (err) => {
    callback(err);
  });
});

// Run production server
gulp.task('express:run-prod', ['webpack:build-prod'], (callback) => {
  const runProd = spawn('npm', ['run', 'run-prod']);
  runProd.stdout.on('data', (data) => {
    const slicedData = data.slice(0, -1);
    console.log(`${slicedData}`);
  });
  runProd.stderr.on('data', (data) => {
    console.log(`${data}`);
  });
  runProd.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  runProd.on('error', (err) => {
    callback(err);
  });
});

// Build bundle and run server
gulp.task('express:run', (callback) => {
  if (isProduction) {
    runSequence('express:run-prod', callback);
  } else {
    runSequence('express:run-dev', callback);
  }
});

// Default task
// 1. eslint
// 2. tslint
// 3. stylelint
// 4. generate bundle and run server
gulp.task('default', (callback) => {
  runSequence('eslint', 'tslint', 'stylelint', 'express:run', callback);
});
