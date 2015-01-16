'use strict';

var React = require('react'),
	Carousel = require('react-bootstrap').Carousel,
  	CarouselItem = require('react-bootstrap').CarouselItem,
  	PictureList = require('./footer/pictureList.jsx'),
	Footer = React.createClass({

	render: function() {
		return (
			<div className="footer">
				{/*<PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />*/}
				<div className="grid_100">
					<div className="grid_25 instagram">
						<img src="dist/img/slide.jpg" alt=""></img>
					</div>
					<div className="grid_25 instagram">
						<img src="dist/img/slide.jpg" alt=""></img>
					</div>
					<div className="grid_25 instagram">
						<img src="dist/img/slide.jpg" alt=""></img>
					</div>
					<div className="grid_25 instagram">
						<img src="dist/img/slide.jpg" alt=""></img>
					</div>
				</div>
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
