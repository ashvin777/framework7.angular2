'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var shell = require('gulp-shell');
var concat = require('gulp-concat');
var exec = require('child_process').exec;
var fs = require('fs');
var recursive = require('recursive-readdir');
var cmd = 'ionic serve';
exec(cmd);

gulp.task('scripts', function() {
  return gulp.src('./www/src/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('sass', function() {
  recursive('www/src/', [function(path, stats) {
    if (stats.isDirectory()) {
      gulp.src(path + "/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path));
    }
  }], function() {});
});

gulp.task('start', function() {
  gulp.watch('./www/src/**/*.scss', ['sass']);
  gulp.watch('./www/src/**/*.js', ['scripts']);
});
