var gulp = require('gulp'),
  gp_rconcat = require('gulp-recursive-concat'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  gp_annotate = require('gulp-ng-annotate'),
  gp_cssmin = require('gulp-minify-css'),
  gp_uglify = require('gulp-uglify');

gulp.task('src-min', function(){
    return gulp.src(['vendor/jquery/jquery.js', 'vendor/bootstrap/js/bootstrap.js', 'js/new-age.js'])
        .pipe(gp_rconcat({extname: ".js", outside: true}))
        .pipe(gp_annotate())
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('src-min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

