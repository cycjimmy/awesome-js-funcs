const gulp = require('gulp');

// copy
gulp.task('copy', done => {
  gulp.src([
    '.gitattributes',
    '.gitignore',
    'LICENSE',
    'README.md',
    '.npmignore',
    'CODE_OF_CONDUCT.md',
  ])
    .pipe(gulp.dest('dist'));

  gulp.src([
    '.github/**/*',
    '!.github/workflows/nodeTestCI.yml',
  ])
    .pipe(gulp.dest('dist/.github'));

  done();
});

