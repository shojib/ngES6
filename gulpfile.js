var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-ruby-sass'),
    server = require('gulp-live-server'),
    jade = require('gulp-jade'),
    jasmine = require('gulp-jasmine'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    protractor = require('gulp-protractor'),
    selenium = require('gulp-selenium'),
    karma = require('gulp-karma'),
    css_minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    minify = require('gulp-minify'),
    gulpif = require('gulp-if'),
    del = require('del');

var src_folder = 'src/modules',
    public_folder = 'public/modules',
    environment = 'dev';

gulp.task('clean', function () {
    del('public');
});

gulp.task('copy', function () {
  return gulp.src(['src/fonts', 'src/i18n', 'jspm_packages'])
    .pipe(gulp.dest('public'))
    .pipe(notify({message:'Copy Task: <%= file.relative %>'}));
});

gulp.task('babel', function () {
  return gulp.src(src_folder + '/**/*.js')
    .pipe(babel())
    .pipe(gulpif(environment == 'prod', uglify()))
    .pipe(gulp.dest(public_folder))
    .pipe(notify({message:'Babel Task: <%= file.relative %>'}));
});

gulp.task('jade', function () {
  gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('public'))
    .pipe(notify({message:'Jade Task: <%= file.relative %>'}));
  gulp.src(src_folder + '/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest(public_folder))
    .pipe(notify({message:'Jade Task: <%= file.relative %>'}));
});

gulp.task('styles', function () {
  return sass('src/scss/', {compass: true})
    .pipe(gulp.dest('public/css'))
    .pipe(notify({message:'Styles Task: <%= file.relative %>'}));
});

gulp.task('set-prod', function () {
  environment = 'prod';
});

gulp.task('dev', ['clean', 'copy', 'babel', 'jade', 'styles']);

gulp.task('prod', ['clean', 'set-prod', 'copy', 'babel', 'jade', 'styles']);
