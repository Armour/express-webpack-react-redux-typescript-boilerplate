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

gulp.task('eslint', () =>
  gulp.src(['**/*.js', '**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format('codeFrame'))
    .pipe(eslint.failAfterError()),
);

gulp.task('tslint', () =>
  gulp.src(['**/*.ts', '**/*.tsx', '!node_modules/**'])
    .pipe(tslint({
      formatter: 'codeFrame',
    }))
    .pipe(tslint.report()),
);

gulp.task('stylelint', () =>
  gulp.src(['**/*.scss', '**/*.css', '!node_modules/**', '!**/materialize/**'])
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    })),
);

gulp.task('webpack:clean', () => del(['frontend/dist', 'webpack-stats.*.json']));

gulp.task('webpack:build-dll', ['webpack:clean'], (callback) => {
  exec('npm run build-dll', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

gulp.task('webpack:build-prod', (callback) => {
  exec('npm run build-prod', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

gulp.task('express:run-dev', ['webpack:build-dll'], (callback) => {
  const runDev = spawn('npm', ['run', 'run-dev']);
  runDev.stdout.on('data', (data) => {
    console.log(`${data}`);
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

gulp.task('express:run-prod', ['webpack:build-prod'], (callback) => {
  const runProd = spawn('npm', ['run', 'run-prod']);
  runProd.stdout.on('data', (data) => {
    console.log(`${data}`);
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

gulp.task('express:run', (callback) => {
  if (isProduction) {
    runSequence('express:run-prod', callback);
  } else {
    runSequence('express:run-dev', callback);
  }
});

gulp.task('default', (callback) => {
  runSequence('eslint', 'tslint', 'stylelint', 'express:run', callback);
});
