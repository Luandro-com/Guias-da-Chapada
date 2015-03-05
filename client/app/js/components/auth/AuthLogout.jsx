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
    		<h1>Logout feito!</h1>
    	</div>);
  }
});

module.exports = Logout;