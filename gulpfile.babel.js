import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import childProcess from 'child_process';
import eslint from 'gulp-eslint';
import tslint from 'gulp-tslint';
import stylelint from 'gulp-stylelint';

const exec = childProcess.exec;
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

// Run server
gulp.task('express:run-server', (callback) => {
  const runServer = spawn('npm', ['run', 'server']);
  runServer.stdout.on('data', (data) => {
    const slicedData = data.slice(0, -1);
    console.log(`${slicedData}`);
  });
  runServer.stderr.on('data', (data) => {
    console.log(`${data}`);
  });
  runServer.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  runServer.on('error', (err) => {
    callback(err);
  });
});

// Generate asset bundles and run server
gulp.task('express:start', (callback) => {
  if (isProduction) {
    runSequence('webpack:build-prod', 'express:run-server', callback);
  } else {
    runSequence('webpack:build-dll', 'express:run-server', callback);
  }
});

// Default task
// 1. eslint
// 2. tslint
// 3. stylelint
// 4. generate asset bundles and run server
gulp.task('default', (callback) => {
  runSequence('eslint', 'tslint', 'stylelint', 'express:start', callback);
});
