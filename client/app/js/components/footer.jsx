'use strict';

var React = require('react'),
	Carousel = require('react-bootstrap').Carousel,
  	CarouselItem = require('react-bootstrap').CarouselItem,
  	PictureList = require('./footer/pictureList.jsx'),
	Footer = React.createClass({

	render: function() {
		return (
			<div className="footer">
				<h1 className="instagram-hash"><span className="hash">#</span>vamoaprachapada</h1>
				<PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />
				<div className="grid_100">
					<div className="banner">
						<a href="">
							Tenha garantia de um bom passeio, <span className="tlt verde" data-in-effect="tada" data-out-effect="flash">agende um guia</span> conosco
						</a>
					</div>
				</div>
			</div>	
				);
			}
		});

module.exports = Footer;
