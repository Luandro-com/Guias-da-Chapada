var express = require('express'),
	app = express(),
	compression = require('compression'),
	favicon = require('serve-favicon'),
	path = require('path');

	historyApiFallback = require('connect-history-api-fallback');
//ISOMORPHIC TRY
// var mainApp = React.createFactory(require('./../client/dist/js/component.js'));
// server.use(function(req, res, next) {
//   var component = mainApp();
//   var html = React.renderToString(component);
//   res.send(html);
// });
//Mailin configs
// app.use(app.router);
// app.head('/webhook', function (req, res) {
//     console.log('Received head request from webhook.');
//     res.send(200);
// });
// app.post('/webhook', function (req, res) {
//     console.log('Receiving webhook.');
//CONFIGS
app.use(compression());
app.use(favicon(__dirname + './../favicon.ico'));
app.use(historyApiFallback);

app.use(express.static(__dirname + './../client'));
app.get('/**/**/*', function (req, res) {
  res.sendFile(__dirname + './../client/index.html');
});

var server = app.listen(5000, function() { 
	console.log('Express is listening to http://localhost:5000'); 
});