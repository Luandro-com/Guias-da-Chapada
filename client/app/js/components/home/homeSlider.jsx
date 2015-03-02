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
				        <img width={"100%"} height={550.4} alt="900x500" src={this.props.slide1.img}/>
				        <div className="carousel-caption">
				          <h3>{this.props.slide1.nome}</h3>
				        </div>
				      </CarouselItem>
				      <CarouselItem>
				        <img width={"100%"} height={550.4} alt="900x500" src={this.props.slide2.img}/>
				        <div className="carousel-caption">
				          <h3>{this.props.slide2.nome}</h3>
				        </div>
				      </CarouselItem>
				      <CarouselItem>
				        <img width={"100%"} height={550.4} alt="900x500" src={this.props.slide3.img}/>
				        <div className="carousel-caption">
				          <h3>{this.props.slide3.nome}</h3>
				        </div>
				      </CarouselItem>
				    </Carousel>
				</div>
  			);
  		}
  	});
module.exports = HomeSlider;