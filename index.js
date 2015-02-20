var express = require('express'),
	app = express(),
	compression = require('compression'),
	favicon = require('serve-favicon'),
	historyApiFallback = require('connect-history-api-fallback');


app.use(compression());
app.use(favicon(__dirname + '/client/app/img/favicon.ico'));
app.use(express.static(__dirname + '/client'));
// app.use(historyApiFallback;
//start server
// app.get('*', function (req, res) { // This wildcard method handles all requests

//     Router.run(routes, req.path, function (Handler, state) {
//         var element = React.createElement(Handler);
//         var html = React.renderToString(element);
//         res.render('main', { content: html });
//     });
// });
var server = app.listen(5000, function() { 
	console.log('Express is listening to http://localhost:5000'); 
});
