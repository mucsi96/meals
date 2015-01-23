var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('default', function () {
    gulp.src('./src/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./public/'));
});
