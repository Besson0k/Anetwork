const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('./styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css/'));
});

//Watch task
gulp.task('watch', function() {
  gulp.watch('./styles/scss/*.scss',['styles']);
});

gulp.task('default', ['watch', 'styles']);
