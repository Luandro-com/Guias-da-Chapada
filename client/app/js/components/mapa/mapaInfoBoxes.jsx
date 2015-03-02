'use strict';
var React = require('react'),
	InfoBox = require('./mapaInfoBox.jsx'),
	InfoBoxes = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		return (
		<div className="infobox-wrapper">

			{this.props.boxes.map(function (boxItem) {
				console.log(boxItem.info);
				return <InfoBox box={boxItem} key={boxItem.lat} />		
			})}
		</div>
		);
	}

});

module.exports = InfoBoxes;