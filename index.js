const express = require('express'),
      app = express(),
      opn = require('opn');

app.use(require('connect-livereload')({
  port: 35729
}));

app.use( '/assets', express.static('public') );

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/src/index.html' );
});

app.listen(3000, function() {

  const port = this.address().port,
        url = 'http://localhost:' + port;

  console.log( 'Editor is running at ' + url );
  opn( url );

});
