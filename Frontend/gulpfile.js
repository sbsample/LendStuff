const babelify   = require("babelify");
const browserify = require("browserify");
const buffer     = require("vinyl-buffer")
const eslint     = require('gulp-eslint');
const gulp       = require('gulp');
const nodemon    = require('gulp-nodemon')
const path       = require('path');
const source     = require("vinyl-source-stream");

const paths = {
  es6: ['app/**/*.js', 'app/index.module.js']
}

// babelify
gulp.task("build", function(){
  return browserify("./app/index.module.js", {debug: true})
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(gulp.dest("app"))
});

gulp.task('lint', function() {
  return gulp.src(paths.es6)
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('start', function () {
  nodemon({
    script: 'app/server.js',
    env: { 'NODE_ENV': 'development' }
  })
})

// watchify
gulp.task('watch', function(){
  gulp.watch(paths.es6, ['lint', 'build'])
});

gulp.task('default', ['start', 'watch']);
