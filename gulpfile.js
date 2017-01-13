var gulp = require('gulp'),
  gp_rconcat = require('gulp-recursive-concat'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  gp_annotate = require('gulp-ng-annotate'),
  gp_cssmin = require('gulp-minify-css'),
  gp_uglify = require('gulp-uglify');

gulp.task('js-min', function(){
    return gulp.src(['vendor/jquery/jquery.js', 'vendor/bootstrap/js/bootstrap.js', 'vendor/easing/jquery.easing.js', 'js/new-age.js'])
        //.pipe(gp_rconcat({extname: ".js", outside: true}))
        .pipe(gp_concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('js-min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css-min', function() {
    return gulp.src([
        'vendor/bootstrap/css/bootstrap.css',
        'vendor/font-awesome/css/font-awesome.css',
        'css/new-age.css'])
        .pipe(gp_concat('all.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('all.min.css'))
        .pipe(gp_cssmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-min', 'css-min'], function(){});
