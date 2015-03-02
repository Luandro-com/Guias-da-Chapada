'use strict';

var React = require('react'),
  	Picture = require('./picture.jsx'),
    Carousel = require('react-bootstrap').Carousel,
    CarouselItem = require('react-bootstrap').CarouselItem,
    Instagram = require('instafeed.js'),
    reqwest = require('reqwest'),
	PictureList = React.createClass({

    getInitialState: function(){
        
        // The pictures array will be populated via AJAX, and 
        // the favorites one when the user clicks on an image:
        
        return { pictures: [] };
    },

    componentDidMount: function(){
    
        // When the component loads, send a jQuery AJAX request

        var self = this;

        // API endpoint for Instagram's popular images for the day

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

            // Update the component's state. This will trigger a render.
            // Note that this only updates the pictures property, and does
            // not remove the favorites array.

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

            <Carousel className="grid_100">
                <CarouselItem>
                     {pictures} 
                </CarouselItem>
            </Carousel>
        );
    }
});

module.exports = PictureList;