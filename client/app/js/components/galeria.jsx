'use strict';
var React = require('react'),
	reqwest = require('reqwest'),
	InfiniteScroll = require('react-infinite-scroll')(React),
    Picture = require('./footer/picture.jsx'),
	Galeria = React.createClass({

		getInitialState: function(){
        
        // The pictures array will be populated via AJAX, and 
        // the favorites one when the user clicks on an image:
        
        return { pictures: [] };
    },

    componentDidMount: function(){
    
        // When the component loads, send a jQuery AJAX request

        var self = this;

        // API endpoint for Instagram's popular images for the day

        var url = 'https://api.instagram.com/v1/tags/coffee/media/recent?access_token=fb2e77d.47a0479900504cb3ab4a1f626d174d2d&callback=?';

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
		var loadFunc = function () {
			console.log("loading more");
		};
		var pictures = this.state.pictures.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} key={p.id} />
        });
		return (
			<div className="galeria">
				<InfiniteScroll
				    loadMore={loadFunc}
				    hasMore={true || false}
				    loader={<div className="loader-container"><div className="switchbox"><div className="switch"></div><div className="switch" id="switch2"></div></div></div>}>
				  {pictures}
				</InfiniteScroll>
			</div>	
		);
	}

});

module.exports = Galeria;