var gulp           = require('gulp'),
    concat         = require('gulp-concat'),
    sass           = require('gulp-sass'),
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

gulp.task('images', function () {
    return gulp.src('./images/*.png')
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task('scss', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('index', ['js', 'scss'], function () {
    var sources = gulp.src(['./**/*.js', './**/*.css'], {read: false, cwd: './dist/'})
                    .pipe(order(['js/lib/**/*.js','js/templates.js' , '**/*.js', 'js/index.js']));

    return gulp.src('./src/index.jade')
        .pipe(inject(sources, {addRootSlash: false}))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('templates', function () {
    return gulp.src('./src/templates/*.jade')
        .pipe(jade({
            client: true
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./dist/js/'));
});


gulp.task('build', ['bower', 'images', 'templates', 'js', 'scss', 'index']);

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['templates', 'js', 'index']);
})

gulp.task('webserver', ['build'], function () {
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

gulp.task('default', ['build', 'webserver', 'watch']);
