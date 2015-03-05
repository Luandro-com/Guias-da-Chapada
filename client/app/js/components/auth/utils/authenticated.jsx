var Login = require("../authLogin.jsx");
var firebaseUtils = require('./firebaseUtils.jsx');

var Authenticated = {
  statics: {
    willTransitionTo: function(transition){
      if(!firebaseUtils.isLoggedIn()){
        Login.attemptedTransition = transition;
        transition.redirect('login');
      }
    }
  }
};

module.exports = Authenticated;