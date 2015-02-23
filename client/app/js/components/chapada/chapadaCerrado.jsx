'use strict';
var React = require('react'),
	Router = require('react-router');


var Cerrado = React.createClass({
mixins: [ Router.Navigation ],
	render: function() {
		return (
			<p>
				Essa é a porra do Cerrado mermão!
			</p>
		);
	}
});

module.exports = Cerrado;