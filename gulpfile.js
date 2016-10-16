/**
 * Created by broven on 10/16/2016.
 */
var gulp = require('gulp')
var uglify = require('gulp-uglify');
var pump = require('pump');
gulp.task('uglify',function() {
    return  gulp.src('app/*.js').pipe(uglify()).pipe(gulp.dest('dist'))

})