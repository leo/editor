const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task( 'es6', () => {
  return gulp.src( 'src/**/*.js' )

  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest( 'dist' ) );
});

gulp.task( 'sass', () => {
  return gulp.src( 'src/**/*.scss' )

  .pipe(sourcemaps.init())
  .pipe( sass({
    outputStyle: 'compressed'
  }).on( 'error', sass.logError ) )
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest('dist') );
});

gulp.task( 'watch', () => {
  gulp.watch( 'src/**/*.scss', ['sass'] );
  gulp.watch( 'src/**/*.js', ['es6'] );
});
