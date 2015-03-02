'use strict';

var React = require('react'),
	OverlayTrigger = require('react-bootstrap').OverlayTrigger,
	Tooltip = require('react-bootstrap').Tooltip, 
	RoteirosItemInfo = React.createClass({
	render: function() {
		return (
			<OverlayTrigger placement="top" overlay={<Tooltip>Acesso de bicicleta</Tooltip>}>
				<li><i className="fa fa-bicycle"></i></li>
			</OverlayTrigger>				
		);
	}
});

module.exports = RoteirosItemInfo;