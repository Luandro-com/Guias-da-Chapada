var koa = require('koa'),
	app = koa(),
	serve = require('koa-static');

app.use(serve(__dirname + '/client'));

var server = app.listen(5000, function() { 
	console.log('Koa is listening to http://localhost:5000'); 
});
