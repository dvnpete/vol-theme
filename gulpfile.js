var gulp = require ('gulp');
var less = require ('gulp-less')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('styles', function () {
  gulp.src('./src/styles/main.less')
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'))
})

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.less'),
  ['styles'])
})
