'use strict';

var React = require('react'),
	_ = require('lodash'),
	Carousel = require('react-bootstrap').Carousel,
  	CarouselItem = require('react-bootstrap').CarouselItem,
	HomeOfertas = React.createClass ({
		render: function () {
			var chamadas = this.props.chamadas;
			var blocoChamadas = _.map(chamadas, function (bloco, key) {
				var blocoItem = _.map(bloco, function (item, key) {
					return (
						<li key={key} className="dyn_hp_offer">
							<div id="left-triangle-home"></div>
							<a className="" href="">
								<div className="dyn_hp_offer_thumb">
									<img width="300" height="255" src={item.img} className="attachment-medium wp-post-image" alt={item.titulo}></img>
								</div>
							</a>
							<div className="dyn_hp_offer_txt">
								<a className="dyn_hp_offer_title" href="">
									<h2>{item.titulo}</h2>
								</a>
								<a className="dyn_hp_offer_desc" href="">{item.texto}</a>
							</div>
							<a className="more" href="">Veja mais &gt;</a>
						</li>
						);
				});
				return (
					<CarouselItem key={key}>
						<ul>	
							{blocoItem}
						</ul>
					</CarouselItem>		
					);
			});
			return (
				<div className="grid_100 ofertas">
					<div className="flight_hp_l">
						<Carousel>
							{blocoChamadas}
						</Carousel>	
						
					</div>
					<div className="grid_100 double-controls">
					
					</div>				
					<div className="clear"></div>
				</div>
			);
		}
	});
module.exports = HomeOfertas;