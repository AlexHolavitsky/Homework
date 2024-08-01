const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const watch = require('gulp-watch');

// Шляхи до файлів
const paths = {
  styles: {
    src: '../hw22/src/style.scss',
    dest: '../hw22/new/'
  },
  scripts: {
    src: '../hw22/src/module.js',
    dest: '../hw22/new/'
  }
};

// Компіліція SCSS в CSS та мініфікація CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

// Конкатинація та мініфікація JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Вотчер для автоматичного виконання завдань при зміні файлів
function watchFiles() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

// Експортування завдань
exports.styles = styles;
exports.scripts = scripts;
exports.watch = gulp.series(styles, scripts, watchFiles);
