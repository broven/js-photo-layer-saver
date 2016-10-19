/**
 * Created by broven on 10/16/2016.
 */
var gulp = require('gulp')
var uglify = require('gulp-uglify');

var pump = require('pump');
gulp.task('copyImg',function(){
  return gulp.src('app/image/*').pipe(gulp.dest('dist/image'))
})
gulp.task('uglify',function() {
    return  gulp.src('app/*.js').pipe(uglify()).pipe(gulp.dest('dist'))

})
gulp.task('copyHtml',function(){
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
})
gulp.task('copyCss',function(){
    return gulp.src('app/*.css')
        .pipe(gulp.dest('dist'))
})
gulp.task('build',['copyImg','uglify','copyHtml','copyCss'],function(){
    console.log("build to dist...")
})