'use strict';
var React = require('react'),
	_ = require('lodash'),
	InfoBox = require('./mapaInfoBox.jsx'),
	InfoBoxes = React.createClass({

	render: function() {
		var markers = this.props.markers;
		console.log('InfoBoxes receives this.props.markers as: '+markers);
		var boxItems = _.map(markers, function (item, key) {
			console.log('InfoBoxes returns InfoBox passing key of '+key);
			return <InfoBox titulo={item.titulo} info={item.info} id={key} key={key} />
			});
		
		return (
			<div className="infobox-wrapper">
				{boxItems}
			</div>	
			);
 	
	}

});

module.exports = InfoBoxes;