var koa = require('koa'),
	app = koa(),
	serve = require('koa-static'),
	favicon = require('koa-favicon'),
	gzip = require('koa-gzip'),
	bodyParser = require('koa-bodyparser'),
	Router = require('koa-router'),
	views = require('koa-render'),
	session = require('koa-generic-session'),
	passport = require('koa-passport');


app.use(gzip());
app.use(serve(__dirname + '/client'));
app.use(favicon(__dirname + '/client/app/img/favicon.ico'));

// sessions
app.keys = ['your-session-secret']
app.use(session())

// body parser
app.use(bodyParser())

// authentication
require('./server/auth/auth')
app.use(passport.initialize())
app.use(passport.session())
// append view renderer
app.use(views('./server/views', {
  map: { html: 'handlebars' },
  cache: false
}))
// public routes
var public = new Router()
public.get('/', function*() {
  this.body = yield this.render('../../client/index')
})
public.get('/login', function*() {
  this.body = yield this.render('login')
})

public.post('/custom', function*(next) {
  var ctx = this
  yield* passport.authenticate('local', function*(err, user, info) {
    if (err) throw err
    if (user === false) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      yield ctx.login(user)
      ctx.body = { success: true }
    }
  }).call(this, next)
})

// POST /login
public.post('/login',
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
  })
)

public.get('/logout', function*(next) {
  this.logout()
  this.redirect('/')
})
app.use(public.middleware())
// Require authentication
app.use(function*(next) {
  if (this.isAuthenticated()) {
    yield next
  } else {
    this.redirect('/login')
  }
})

var secured = new Router()

secured.get('/admin', function*() {
  this.body = yield this.render('admin')
})

app.use(secured.middleware())

//start server
var server = app.listen(5000, function() { 
	console.log('Koa is listening to http://localhost:5000'); 
});
