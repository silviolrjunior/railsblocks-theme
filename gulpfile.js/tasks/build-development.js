var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['fonts', 'iconFont', 'images', 'svg-sprite'], ['less', 'webpack:development', 'html'], cb)
});
