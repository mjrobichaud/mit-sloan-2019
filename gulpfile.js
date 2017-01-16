var gulp = require('gulp'),
  gp_rconcat = require('gulp-recursive-concat'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  gp_annotate = require('gulp-ng-annotate'),
  gp_cssmin = require('gulp-minify-css'),
  gp_uglify = require('gulp-uglify');

gulp.task('js-min', function(){
  return gulp.src(['vendor/jquery/jquery.js', 'vendor/bootstrap/js/bootstrap.js', 'vendor/easing/jquery.easing.js', 'js/new-age.js'])
    .pipe(gp_concat('all.js'))
    .pipe(gulp.dest('js'))
    .pipe(gp_rename('js-min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css-min', function() {
  return gulp.src([
    'vendor/bootstrap/css/bootstrap.css',
    'vendor/font-awesome/css/font-awesome.css',
    'css/new-age.css'])
    .pipe(gp_concat('all.css'))
    .pipe(gulp.dest('css'))
    .pipe(gp_rename('all.min.css'))
    .pipe(gp_cssmin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
  return gulp.src([
    'img/chart.png',
    'img/gears.png',
    'img/lightbulb.png',
    'img/bg2.jpg',
    'img/bg4.jpg',
    'img/headshot.jpg',
    'img/bg-pattern.png'])
    .pipe(gulp.dest('dist/img'));
});

gulp.task('index', function() {
  return gulp.src([
    'index.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-min', 'css-min', 'img', 'index'], function(){});
