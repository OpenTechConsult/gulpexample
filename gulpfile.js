const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('default', () => {

    // use built-in gulp.src file globbing utiliy to find all React jsx files
    return gulp.src('app/*.jsx')
            .pipe(sourcemaps.init())  //start watching source file to build source map for debugging
            .pipe(babel({ // configure gulp-babel to use es2015 and react
                presets: ['es2015', 'react']
            }))
            .pipe(concat('all.js')) // concacts all the source files together into all.js
            .pipe(sourcemaps.write('.')) // write the sourcemap file separately
            .pipe(gulp.dest('dist')); // redirect all files to the dist/folder
});