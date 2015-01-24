var gulp           = require('gulp'),
    jade           = require('gulp-jade'),
    inject         = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files'),
    uglify         = require('gulp-uglify'),
    order          = require('gulp-order'),
    webserver      = require('gulp-webserver'),
    deploy         = require('gulp-gh-pages');

gulp.task('bower', function () {
    return gulp.src(mainBowerFiles())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/lib/'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('jade', ['js'], function () {
    var sources = gulp.src(['./**/*.js'], {read: false, cwd: './dist/'})
                    .pipe(order(['js/lib/**/*.js','**/*.js','js/index.js']));

    return gulp.src('./src/*.jade')
        .pipe(inject(sources, {addRootSlash: false}))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['jade']);
})

gulp.task('webserver', ['jade'], function () {
    return gulp.src('./dist/')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: 'index.html'
        }));
});

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(deploy());
});

gulp.task('default', ['webserver', 'watch']);
