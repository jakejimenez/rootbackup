'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  console.log('Nothing in default yet...')
});

gulp.task('sass', function() {
  return gulp.src('./assets/src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/dist/css'));
});