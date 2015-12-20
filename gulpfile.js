const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      sourcemaps = require('gulp-sourcemaps'),
      gls = require('gulp-live-server'),
      server = gls.new('index.js');

gulp.task( 'es6', () => {

  return gulp.src( 'src/**/*.js' )

  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015'],
    compact: true
  }))
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest( 'public' ) );

});

gulp.task( 'sass', () => {

  return gulp.src( 'src/**/*.scss' )

  .pipe(sourcemaps.init())
  .pipe( sass({
    outputStyle: 'compressed'
  }).on( 'error', sass.logError ) )
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest('public') );

});

gulp.task( 'watch', () => {

  function notifyServer(file) {
    server.notify.apply( server, [file] );
  }

  server.start();

  gulp.watch( 'src/index.html', notifyServer );
  gulp.watch( 'src/*.scss', ['sass'], notifyServer );
  gulp.watch( 'src/*.js', ['es6'], notifyServer );

  gulp.watch( 'index.js', server.start.bind(server) );

});

gulp.task( 'default', ['es6', 'sass', 'watch'] );
