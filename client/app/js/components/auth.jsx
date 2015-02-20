'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route,
	RouteHandler = Router.RouteHandler,
	Link = Router.Link;
var Logout = require('./auth/AuthLogout.jsx'),
    Login = require('./auth/AuthLogin.jsx'),
    Admin = require('./auth/AuthAdmin.jsx');


//Authentication
var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      if (!authLib.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  }
};

// Fake authentication lib
var authLib = {
  login: function (email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    pretendRequest(email, pass, function (res) {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true);
        this.onChange(true);
      } else {
        if (cb) cb(false);
        this.onChange(false);
      }
    }.bind(this));
  },

  getToken: function () {
    return localStorage.token;
  },

  logout: function (cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn: function () {
    return !!localStorage.token;
  },

  onChange: function () {}
};

function pretendRequest(email, pass, cb) {
  setTimeout(function () {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      });
    } else {
      cb({authenticated: false});
    }
  }, 0);
}
var Auth = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: authLib.loggedIn()
    };
  },

  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function () {
    authLib.onChange = this.setStateOnAuth;
    authLib.login();
  },

  render: function () {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;
    return (
      <div>
        <ul>
          <li>{loginOrOut}</li>
          <li><Link to="admin">admin</Link> (authenticated)</li>
        </ul>
        <RouteHandler/>
      </div>
    );
  }
});



module.exports = Auth;