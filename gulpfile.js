const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      sourcemaps = require('gulp-sourcemaps');
      server = require('gulp-express');

gulp.task( 'es6', () => {

  return gulp.src( 'src/**/*.js' )

  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015'],
    compact: true
  }))
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest( 'public' ) )
  .pipe( server.notify() );

});

gulp.task( 'sass', () => {

  return gulp.src( 'src/**/*.scss' )

  .pipe(sourcemaps.init())
  .pipe( sass({
    outputStyle: 'compressed'
  }).on( 'error', sass.logError ) )
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest('public') )
  .pipe( server.notify() );

});

gulp.task( 'watch', () => {

  server.run( ['index.js'] );

  gulp.watch( 'src/*.html', server.notify );
  gulp.watch( 'src/*.scss', ['sass'] );
  gulp.watch( 'src/*.js', ['es6'] );

  gulp.watch( 'index.js', [server.run] );

});

gulp.task( 'default', ['es6', 'sass', 'watch'] );
