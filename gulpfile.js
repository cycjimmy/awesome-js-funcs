const gulp = require('gulp');

// copy
gulp.task('copy', done => {
  gulp.src([
    'LICENSE',
    'package-lock.json',
    'README.md',
  ])
    .pipe(gulp.dest('dist'));

  done();
});

