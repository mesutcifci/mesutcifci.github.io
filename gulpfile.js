import pkg from 'gulp';
const { task, src, dest, watch, series } = pkg;

import fileInclude from 'gulp-file-include';

import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import imagemin, { mozjpeg as _mozjpeg, optipng as _optipng } from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';



task('style', () => {
    const plugins = [
        autoprefixer({ cascade: false }),
        cssnano()
    ];
    return src('./src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(dest('./build/css/'))
})



task('imagemin', () => {
    return src('./images/*')
        .pipe(imagemin([
            _mozjpeg({ quality: 45, progressive: true }),
            _optipng({optimizationLevel: 5})
        ]))
        .pipe(dest('./images/'))
});


task('minifyhtml', () => {
    return src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./'))
})

task('includeHtml', () => {
    return src([
        './src/html/*.html',
        '!./src/html/head.html',
        '!./src/html/navbar.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./'))
})

task('scss', () => {
    return src("./scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(dest("./src/css/"))
});



task('default', () => {

    watch('./scss/**/*/*.scss', series('scss'))
    watch('./src/css/*.css', series('style'));

    watch(['./src/html/*.html'], series('includeHtml', 'minifyhtml'))

});