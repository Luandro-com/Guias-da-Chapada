'use strict';
var React = require('react'),
	Instagram = require('instafeed.js'),
    reqwest = require('reqwest'),
    Picture = require('./footer/picture.jsx'),
	Galeria = React.createClass({

	getInitialState: function(){
        return { pictures: [] };
    },
    componentDidMount: function(){
        var self = this;
        var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?&count=4';

        reqwest({
            url: url,
            type: 'jsonp',
            success: function(result){

            if(!result || !result.data || !result.data.length){
                return;
            }

            var pictures = result.data.map(function(p){

                return { 
                    id: p.id, 
                    url: p.link, 
                    src: p.images.low_resolution.url, 
                    title: p.caption ? p.caption.text : '', 
                    favorite: false 
                };

            });

            self.setState({ pictures: pictures });

        }});
    },

	render: function() {
		var pictures = this.state.pictures.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} key={p.id} />
        });

        if(!pictures.length){
            pictures = <p>Loading images..</p>;
        }
		return (
			<div className="galeria">
				{pictures}
			</div>	
		);
	}

});

module.exports = Galeria;