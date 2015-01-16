'use strict';
var React = require('react'),
	Carousel = require('react-bootstrap').Carousel,
  	CarouselItem = require('react-bootstrap').CarouselItem,
  	HomeSlider = React.createClass({
  		render: function () {
  			return (
  				<div className="home-slider">
					<Carousel>
				      <CarouselItem>
				        <img width={"100%"} height={550.4} alt="900x500" src="https://ununsplash.imgix.net/photo-1418227165283-1595d13726cd?q=75&w=1080&h=1080&fit=max&fm=jpg&s=4a52f1854342eddcb31662ffbb0fb77e"/>
				        <div className="carousel-caption">
				          <h3>Cachoeira do Zé Cascudo</h3>
				        </div>
				      </CarouselItem>
				      <CarouselItem>
				        <img width={"100%"} height={550.4} alt="900x500" src="https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050"/>
				        <div className="carousel-caption">
				          <h3>Queda da Princesa Leia</h3>
				        </div>
				      </CarouselItem>
				      <CarouselItem>
				        <img width={"100%"} height={550.4} alt="900x500" src="https://ununsplash.imgix.net/photo-1415226194219-638f50c5d25f?fit=crop&fm=jpg&h=800&q=75&w=1050"/>
				        <div className="carousel-caption">
				          <h3>Haduken Kame Hame Ha</h3>
				        </div>
				      </CarouselItem>
				    </Carousel>
				</div>
  			);
  		}
  	});
module.exports = HomeSlider;