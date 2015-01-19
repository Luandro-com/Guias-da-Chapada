'use strict';

var express = require('express'),
	app = express(),
  favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
  router = express.Router(),
  mdirect = require('mobile-redirect'),
	passport = require('passport');

//Basic server
app.set('port', (process.env.PORT || 5000))
app.use(favicon(__dirname + '/client/dist/img/favicon.ico'))
app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())
//Redirect mobile
app.use(mdirect())
// route middleware that will happen on every request
router.use(function(request, response, next) {
    // log each request to the console
    console.log(request.method, request.url);
    // continue doing what we were doing and go to the route
    next(); 
});
app.get('/', function(request, response) {
  return next();
})
app.get('/mobile', function(request, response) {
  response.send('Isso é mobile!');  
})
app.get('/login', function(request, response) {
  response.send('Loga fdp!');  
})
app.get('/admin', function(request, response) {
  response.send('Você é o Admin?');  
})

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

//Auth
app.post('/login', passport.authenticate('local', { successRedirect: '/Admin',
                                                    failureRedirect: '/login' }))
//API
//GET
app.get('/api/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  
var q = quotes[req.params.id];
  res.json(q);
})
//POST
app.post('/api', function(req, res) {
  if(!req.body.hasOwnProperty('author') || 
     !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
var newQuote = {
    author : req.body.author,
    text : req.body.text
  }; 
 
quotes.push(newQuote);
  res.json(true);
});
//DELETE
app.delete('/api/:id', function(req, res) {
  if(quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  

quotes.splice(req.params.id, 1);
  res.json(true);
});
//DATABASE
var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];