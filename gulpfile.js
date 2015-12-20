const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      sourcemaps = require('gulp-sourcemaps'),
      gls = require('gulp-live-server'),
      server = gls.new('index.js');

gulp.task( 'js', () => {

  return gulp.src( 'src/**/*.js' )

  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015'],
    compact: true
  }))
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest( 'public' ) );

});

gulp.task( 'scss', () => {

  return gulp.src( 'src/**/*.scss' )

  .pipe(sourcemaps.init())
  .pipe( sass({
    outputStyle: 'compressed'
  }).on( 'error', sass.logError ) )
  .pipe(sourcemaps.write('.'))

  .pipe( gulp.dest('public') );

});

gulp.task( 'watch', () => {

  server.start();

  function notifyServer(file) {

    var ext = file.path.split('.').pop();

    if(ext == 'scss' || ext == 'js') {
      gulp.run( ext );
    }

    server.notify.apply( server, [file] );

  }

  gulp.watch('src/index.html', notifyServer);
  gulp.watch('src/*.scss', notifyServer);
  gulp.watch('src/*.js', notifyServer);

  gulp.watch('index.js', function() {
    server.start.bind(server)()
  });

});

gulp.task( 'default', ['js', 'scss', 'watch'] );
