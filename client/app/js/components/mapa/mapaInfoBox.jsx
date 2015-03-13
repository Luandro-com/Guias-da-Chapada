'use strict';
var React = require('react'),
	InfoBox = React.createClass({

	render: function() {
		var id = this.props.id;
		console.log('props.id gets to InfoBox as : '+id);
		var boxId = "infobox"+ this.props.id;
		var urlID = "http://guiasdachapada.com/#"+boxId;
		console.log("Generated InfoBox with ID of : "+boxId);

	return (
			<div id={boxId}>
	        	<div className="box-title">
	        		<h3>{this.props.titulo}</h3>
	        	</div>
			    <img src="dist/img/slide.jpg" alt="" />
	        	<div className="grid_100">
	        		<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
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
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		{this.props.info}
		        	</div>
		        	<div className="grid_20 ">
		        		<div className="fb-like" data-href={urlID} data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>
		        	</div>
	        	</div>
			</div>
		);
	}

});

module.exports = InfoBox;