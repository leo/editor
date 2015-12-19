const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const server = require('gulp-express');

gulp.task( 'es6', () => {
  return gulp.src( 'src/**/*.js' )

  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015'],
    compact: true
  }))
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest( 'dist' ) )
  .pipe( server.notify() );
});

gulp.task( 'sass', () => {
  return gulp.src( 'src/**/*.scss' )

  .pipe(sourcemaps.init())
  .pipe( sass({
    outputStyle: 'compressed'
  }).on( 'error', sass.logError ) )
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest('dist') )
  .pipe( server.notify() );
});

gulp.task( 'watch', () => {

  server.run( ['index.js'] );
  open({uri: 'http://localhost:5670'})

  gulp.watch( 'src/*.html', server.notify );
  gulp.watch( 'src/*.scss', ['sass'] );
  gulp.watch( 'src/*.js', ['es6'] );

  gulp.watch( 'index.js', [server.run] );

});
