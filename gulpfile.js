const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
// ----------------------------------------------
const sass = gulpSass(dartSass);
const themesDir = [
    './src/src/lib/colors/blue/colors.scss',
    './src/src/lib/colors/coffee/colors.scss',
    './src/src/lib/colors/ectoplasm/colors.scss',
    './src/src/lib/colors/light/colors.scss',
    './src/src/lib/colors/midnight/colors.scss',
    './src/src/lib/colors/modern/colors.scss',
    './src/src/lib/colors/ocean/colors.scss',
    './src/src/lib/colors/sunrise/colors.scss'
];
gulp.task("sass", async function() {
    return gulp.src(themesDir)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(file => file.base))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(rename('colors.min.css'))
        .pipe(gulp.dest(file => file.base))
});