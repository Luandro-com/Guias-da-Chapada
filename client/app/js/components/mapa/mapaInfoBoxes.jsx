'use strict';
var React = require('react'),
	InfoBox = require('./mapaInfoBox.jsx'),
	InfoBoxes = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		return (

		<div className="infobox-wrapper">
			<InfoBox />
		</div>
		);
	}

});

module.exports = InfoBoxes;