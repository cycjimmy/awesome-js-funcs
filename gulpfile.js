const gulp = require('gulp');

// copy
gulp.task('copy:esm', (done) => {
  gulp.src([
    'src/**/*.js',
  ], {
    base: './src/',
  })
    .pipe(gulp.dest('dist/esm'));

  done();
});

gulp.task('copy:package', (done) => {
  gulp.src([
    'LICENSE',
    'README.md',
  ])
    .pipe(gulp.dest('dist'));

  done();
});
