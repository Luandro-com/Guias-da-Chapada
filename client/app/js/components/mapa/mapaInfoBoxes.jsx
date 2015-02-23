'use strict';
var React = require('react'),
	InfoBox = require('./mapaInfoBox.jsx'),
	InfoBoxes = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		return (
		<div className="infobox-wrapper">
			{this.props.boxes.map(function (box) {
				return <InfoBox box={box} key={box} />		
			})}
		</div>
		);
	}

});

module.exports = InfoBoxes;