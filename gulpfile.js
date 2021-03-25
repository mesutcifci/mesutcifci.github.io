const gulp = require('gulp');

const fileInclude = require('gulp-file-include');

const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const optipng = require('imagemin-optipng');



gulp.task('style', () => {
    const plugins = [
        autoprefixer({ cascade: false }),
        cssnano()
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/css/'))
})



gulp.task('imagemin', () => {
    return gulp.src('./images/*')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 45, progressive: true }),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest('./images/'))
});


gulp.task('minifyhtml', () => {
    return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'))
})

gulp.task('includeHtml', () => {
    return gulp.src([
        './src/html/*.html',
        '!./src/html/head.html',
        '!./src/html/navbar.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'))
})

gulp.task('scss', () => {
    return gulp.src("./scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest("./src/css/"))
});



gulp.task('default', () => {

    gulp.watch('./scss/**/*/*.scss', gulp.series('scss'))
    gulp.watch('./src/css/*.css', gulp.series('style'));

    gulp.watch(['./src/html/*.html'], gulp.series('includeHtml', 'minifyhtml'))

});