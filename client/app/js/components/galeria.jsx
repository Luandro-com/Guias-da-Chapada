'use strict';
var React = require('react'),
	Instagram = require('instafeed.js'),
    Picture = require('./footer/picture.jsx'),
	Galeria = React.createClass({

	getInitialState: function(){
        return { pictures: [] };
    },
    componentDidMount: function(){
        var self = this;
        var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?&count=4';
    },

	render: function() {
		
		return (
			<div className="galeria">
				{pictures}
			</div>	
		);
	}

});

module.exports = Galeria;