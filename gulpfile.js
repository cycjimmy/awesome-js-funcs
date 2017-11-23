const
  gulp = require('gulp')
;

// copy
gulp.task('copy', () => {
  gulp.src([
    '.gitattributes',
    '.gitignore',
    'LICENSE',
    'README.md',
  ])
    .pipe(gulp.dest('dist'));
});

