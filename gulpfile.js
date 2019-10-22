const gulp = require('gulp');

// copy
gulp.task('copy', done => {
  gulp.src([
    '.gitattributes',
    '.gitignore',
    'LICENSE',
    'README.md',
    '.npmignore',
  ])
    .pipe(gulp.dest('dist'));

  done();
});

