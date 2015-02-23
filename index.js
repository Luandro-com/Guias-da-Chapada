var express = require('express'),
	app = express(),
	compression = require('compression'),
	favicon = require('serve-favicon'),
	historyApiFallback = require('connect-history-api-fallback');

app.use(compression());
app.use(favicon(__dirname + '/client/app/img/favicon.ico'));
app.use(historyApiFallback);

app.use(express.static(__dirname + '/client'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

var server = app.listen(5000, function() { 
	console.log('Express is listening to http://localhost:5000'); 
});
