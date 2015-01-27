var passport = require('koa-passport'),
    Router = require('koa-router');


var user = { id: 1, username: 'test' }

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  done(null, user)
})

var LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(function(username, password, done) {
  // retrieve user ...
  if (username === 'admin' && password === 'moinho2015') {
    done(null, user)
  } else {
    done(null, false)
  }
}))
