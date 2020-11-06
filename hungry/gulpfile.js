const gulp = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const browserSync = require('browser-sync').create()

function scssTask() {
  return gulp
    .src("./dev/scss/**/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("styles"))
    .pipe(browserSync.stream())
}

function watchTask() {
  browserSync.init({
    server: {
       baseDir: "./",
       index: "/index.html"
    }
  })
  gulp.watch("./dev/scss/**/*.scss", scssTask)
  gulp.watch("./dev/scss/**/*.scss").on('change',browserSync.reload)
  gulp.watch('./*.html').on('change',browserSync.reload)
}

exports.default = watchTask