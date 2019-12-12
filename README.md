# LEARN FRONT-END BUILD SYSTEM AUTOMATION WITH GULP

[Gulp](http://gulpjs.com) is a toolkit for automating painful or time-consuming tasks in our development workflow. [Gulp](http://gulpjs.com) is a build system based on streams. We can route streams together to create a build pipeline that achieve a lot. With Gulp, we can reuse parts of different build process of projects that share certain build requirement.

Gulp helps achieve high level of reuse through two techniques

- using plugins
- defining our own build tasks

The build process is a stream, so we can pipe tasks and  plugins through each other

## Adding Gulp to a project

To add Gulp to a project, we need to install both **gulp-cli** and **gulp packages** with npm. Generally gulp-cli is installed globally so that we can call gulp command from everywhere.

>Note : _we should run `npm rm --global gulp` if we had previously installed the gulp package globally_

Let's perform these steps to add gulp to our project

> `npm i -g gulp-cli`

> `mkdir gulpexample`

> `cd gulpexample`

> `npm init -y`

> `npm i -save-dev gulp`

Next create file called gulpfile.js

> `touch gulpfile.js`

## Use Gulp to create a small react project.

We'll use Gulp to create a REACT project. For that we will use [gulp-babel](https://www.npmjs.com/package/gulp-babel), [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps), and [gulp-concat](https://github.com/gulp-community/gulp-concat)

> Use npm with --save-dev when we want to add Gulp plugins to a project.

## Creating and running gulp tasks

Creating Gulp tasks involves writing Node code with Gulp's API in a file called gulpfile.js. Gulp has API to perform such thing as finding file and piping  them through plugins that change them.

Let's illustrate Gulp task creation by putting the following code in the _gulpfile.js_.

```js 
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
```

The code use several Gulp plugins to capture, process, and write files.

1- First we find all of the input source file by using file globbing
2- Second, we use gulp-sourcemaps plugin to collect source-maps metrics for client side debugging. gulp-sourcemaps is use at two stage: one stage that state that we want to use source map and the other stage to write the source map file.
3- Gulp-babel is use to process files with ES2015 and React.

