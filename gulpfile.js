'use strict';

var gulp = require('gulp');

// js variables
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

// scss variables
var sass = require('gulp-sass');

// html variables
var htmlmin = require('gulp-htmlmin');

// postcss variables
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');

var paths = {
  css: ['public/css/*.css'],
  html: ['public/html/*.html'],
  js: ['public/js/*.js'],
  jsWatch: ['public/js/*.js', 'public/js/*.min.js'],
  scss: ['public/scss/**/*.scss']
};

gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('css:minify', function () {
  return gulp.src(paths.css)
    .pipe(cssnano())
    .pipe(postcss([autoprefixer({ browsers: ['ie >= 10', 'last 4 versions', '> 1%'] })]))
    .pipe(gulp.dest('public/css'));
});

gulp.task('html:minify', function() {
  return gulp.src(paths.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/html'));
});

gulp.task('js', function () {
    return gulp.src(paths.jsWatch)
        .pipe(concat('scripts.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('js:minify', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('watcher', function () {
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.jsWatch, ['js']);
});

gulp.task('build', ['css:minify', 'html:minify', 'js:minify'], function () {
    console.log('Build success');
});