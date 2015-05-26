var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    jasmine = require('gulp-jasmine'),
    uglify = require('gulp-uglify'),
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

gulp.task('copy', ['clean'], function () {
  gulp.src('src/fonts/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('public/fonts'))
    .pipe(connect.reload())
    .pipe(notify({message:'Copy Task: <%= file.relative %>'}));
  gulp.src('src/i18n/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('public/i18n'))
    .pipe(connect.reload())
    .pipe(notify({message:'Copy Task: <%= file.relative %>'}));
  gulp.src('jspm_packages/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('public/jspm_packages'))
    .pipe(connect.reload())
    .pipe(notify({message:'Copy Task: <%= file.relative %>'}));
});

gulp.task('scripts', function () {
  return gulp.src(src_folder + '/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulpif(environment == 'prod', uglify()))
    .pipe(gulp.dest(public_folder))
    .pipe(connect.reload())
    .pipe(notify({message:'Scripts Task: <%= file.relative %>'}));
});

gulp.task('templates', function () {
  gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
    .pipe(notify({message:'Jade Task: <%= file.relative %>'}));
  gulp.src(src_folder + '/**/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(public_folder))
    .pipe(connect.reload())
    .pipe(notify({message:'Templates Task: <%= file.relative %>'}));
});

gulp.task('styles', function () {
  return sass('src/scss/', {compass: true})
    .pipe(plumber())
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload())
    .pipe(notify({message:'Styles Task: <%= file.relative %>'}));
});

gulp.task('set-prod', function () {
  environment = 'prod';
});

gulp.task('connect', function() {
  connect.server({
    root: ['public'],
    port: 8000,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['styles']);
  gulp.watch('src/modules/**/*.js', ['scripts']);
  gulp.watch(['src/index.jade', src_folder + '/**/*.jade'], ['templates']);
});


gulp.task('dev', ['copy'], function() {
  gulp.run(['scripts', 'templates', 'styles', 'connect', 'watch']);
});

gulp.task('prod', ['copy'], function() {
    gulp.run(['set-prod', 'scripts', 'templates', 'styles', 'connect', 'watch']);
});
