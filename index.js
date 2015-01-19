var koa = require('koa'),
	app = koa(),
	serve = require('koa-static'),
	favicon = require('koa-favicon'),
	gzip = require('koa-gzip'),
	auth = require('koa-basic-auth'),
	mount = require('koa-mount');


app.use(gzip());
app.use(serve(__dirname + '/client'));
app.use(favicon(__dirname + '/client/app/img/favicon.ico'));

var server = app.listen(5000, function() { 
	console.log('Koa is listening to http://localhost:5000'); 
});

//auth
app.use(mount('/admin', auth({ name: 'admin', pass: 'admin' })));