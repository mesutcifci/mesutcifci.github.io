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
            imagemin.mozjpeg({ quality: 50, progressive: true })
        ]))
        .pipe(gulp.dest('./images/'))
});


gulp.task('minifyhtml', () => {
    return gulp.src('./build/html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/html/'))
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
        .pipe(gulp.dest('./build/html/'))
})




gulp.task('javascript', () => {
    return gulp.src('./src/js/index.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'))
})



gulp.task('scss', () => {
    return gulp.src("./scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest("./src/css/"))
});



gulp.task('default', () => {

    gulp.watch('./scss/**/*/*.scss', gulp.series('scss'))
    gulp.watch('./src/css/*.css', gulp.series('style'));

    gulp.watch('./src/js/index.js', gulp.series('javascript'));

    gulp.watch(['./src/html/*.html'], gulp.series('includeHtml', 'minifyhtml'))

});