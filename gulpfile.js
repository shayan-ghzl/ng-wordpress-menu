const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
// ----------------------------------------------
const sass = gulpSass(dartSass);
const themesDir = [
    './src/assets/colors/blue/colors.scss',
    './src/assets/colors/coffee/colors.scss',
    './src/assets/colors/ectoplasm/colors.scss',
    './src/assets/colors/light/colors.scss',
    './src/assets/colors/midnight/colors.scss',
    './src/assets/colors/modern/colors.scss',
    './src/assets/colors/ocean/colors.scss',
    './src/assets/colors/sunrise/colors.scss'
];
gulp.task("sass", async function() {
    return gulp.src(themesDir)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(file => file.base))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(rename('colors.min.css'))
        .pipe(gulp.dest(file => file.base))
});