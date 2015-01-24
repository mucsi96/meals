var gulp           = require('gulp'),
    jade           = require('gulp-jade'),
    inject         = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files'),
    uglify         = require('gulp-uglify'),
    order          = require('gulp-order'),
    webserver      = require('gulp-webserver');

gulp.task('bower', function () {
    return gulp.src(mainBowerFiles())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/lib/'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('jade', ['js'], function () {
    var sources = gulp.src(['./**/*.js'], {read: false, cwd: './public/'})
                    .pipe(order(['js/lib/**/*.js','**/*.js','js/index.js']));

    return gulp.src('./src/*.jade')
        .pipe(inject(sources))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['jade']);
})

gulp.task('webserver', ['jade'], function () {
    return gulp.src('./public/')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: 'index.html'
        }));
});

gulp.task('default', ['webserver', 'watch']);
