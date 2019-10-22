const gulp = require('gulp');

// copy
gulp.task('copy', done => {
  gulp.src([
    '.gitattributes',
    '.gitignore',
    '.npmignore',
    'LICENSE',
    'package-lock.json',
    'README.md',
  ])
    .pipe(gulp.dest('dist'));

  done();
});

