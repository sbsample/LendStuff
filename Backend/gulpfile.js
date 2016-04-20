const gulp   = require('gulp');
const watch  = require('gulp-watch');
const babel  = require('gulp-babel');
const eslint = require('gulp-eslint');
const path   = require('path');

const paths = {
  es6: ['app/**/*.js', 'index.js']
}

// babelify
gulp.task('babel', () => {
  return gulp.src('index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('lint', function() {
  return gulp.src(paths.es6)
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

// watchify
gulp.task('watch', function(){
  gulp.watch(paths.es6, ['babel'])
});

gulp.task('default', ['watch']);
