var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config/less');
var autoprefixer = require('gulp-autoprefixer');
var less         = require('gulp-less');
var path         = require('path');

gulp.task('less', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});