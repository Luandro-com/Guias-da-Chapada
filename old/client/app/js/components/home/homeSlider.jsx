'use strict';
var React = require('react'),
	_ = require('lodash'),
	Carousel = require('react-bootstrap').Carousel,
  	CarouselItem = require('react-bootstrap').CarouselItem,
  	HomeSlider = React.createClass({
  		render: function () {
  			var slides = this.props.slides;
  			var itemCarousel = _.map(slides, function (slide) {
  				return (
						<CarouselItem key={slide.nome}>
					        <img width={"100%"} height={550.4} alt="900x500" src={slide.img}/>
					        <div className="carousel-caption">
					          <h3>{slide.nome}</h3>
					        </div>
				      	</CarouselItem>
				      	);
					});
  			return (
  				<div className="home-slider">
					<Carousel>
						{itemCarousel}
				    </Carousel>
				</div>
  			);
  		}
  	});
module.exports = HomeSlider;