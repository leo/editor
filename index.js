const express = require('express');
const app = module.exports.app = exports.app = express();
const opn = require('opn');

app.use( require('connect-livereload')() );
app.use( '/assets', express.static('dist') );

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/src/index.html' );
});

app.listen(5670, function() {

  const port = this.address().port;
  const url = 'http://localhost:' + port;

  console.log( 'Editor is running at ' + url );
  opn( url );

});
