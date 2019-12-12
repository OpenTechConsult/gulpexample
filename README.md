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