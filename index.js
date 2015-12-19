const express = require('express');
const app = module.exports.app = exports.app = express();

app.use( require('connect-livereload')() );
app.use( '/assets', express.static('dist') );

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/src/index.html' );
});

app.listen(3000, function () {
  var port = this.address().port;
  console.log( 'Editor is running at http://localhost:%s', port );
});
