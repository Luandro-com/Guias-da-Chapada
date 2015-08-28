'use strict';

var React = require('react');
var Navigation = require('react-router').Navigation;
var Link = require('react-router').Link;
var firebaseUtils = require('./utils/firebaseUtils.jsx');

var Logout = React.createClass({
	mixins : [Navigation],

  componentDidMount: function () {
    firebaseUtils.logout();
    setTimeout(function () {
    	console.log('Direcionando para página inicial');
       this.transitionTo('/');
    }.bind(this), 3000);
  },

  render: function () {
    return (
    	<div>
    		<h3>Logout feito!</h3>
        <p>redirecionando para página principal</p>
    	</div>);
  }
});

module.exports = Logout;