'use strict';
var React = require('react'),
  	HomeSlider = require('./home/homeSlider.jsx'),
  	HomeContent = require('./home/homeContent.jsx'),
  	HomeOfertas = require('./home/homeOfertas.jsx'),
	Home = React.createClass({

	render: function() {
		return (
	<div className="outer_wrap">
		<div className="inner_wrap">
			<div id="container">
				<HomeSlider />
			</div>
			<div className="content">
				<HomeContent />
				<HomeOfertas />
				<div className="clear"></div>
			</div>
		</div>
	</div>
		);
	}

});

module.exports = Home;