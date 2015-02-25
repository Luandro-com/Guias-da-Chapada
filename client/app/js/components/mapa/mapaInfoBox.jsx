'use strict';
var React = require('react'),
	InfoBox = React.createClass({

	render: function() {
		var boxId = "infobox"+ this.props.box.id;

	return (
			<div id={boxId}>
	        	<div className="box-title">
	        		<h3>{this.props.box.title}</h3>
	        	</div>
			    <img src="dist/img/slide.jpg" alt="" />
	        	<div className="grid_100">
	        		<div className="grid_20 ">
		        		{this.props.box.info}
		        	</div>
		        	<div className="grid_20 ">
		        		1 DIA
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		omg
		        	</div>
	        	</div>
	        	<div className="grid_100">
	        		<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		omg
		        	</div>
		        	<div className="grid_20 ">
		        		omg
		        	</div>
		        	<div className="grid_20 ">
		        		omg
		        	</div>
	        	</div>
			</div>
		);
	}

});

module.exports = InfoBox;