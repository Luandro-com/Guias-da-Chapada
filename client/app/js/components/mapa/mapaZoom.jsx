'use strict'
var React = require('react'),
	ZoomControl = require('./ZoomControl.js');

var MapaZoom = React.createClass({
	componentDidMount: function() {
		var zoomControlDiv = document.createElement('div');
		var zoomControl = new ZoomControl(zoomControlDiv, map);
 	 		zoomControlDiv.index = 1;
  			map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
	},
	render: function() {
		return (
			<div></div>
		);
	}
});

module.exports = MapaZoom;