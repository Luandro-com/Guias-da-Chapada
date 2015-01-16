'use strict';

var React = require('react'),
	Carousel = require('react-bootstrap').Carousel,
  	CarouselItem = require('react-bootstrap').CarouselItem,
	HomeOfertas = React.createClass ({
		render: function () {
			return (
				<div className="grid_100 ofertas">
					<div className="flight_hp_l">
						<Carousel>
							<CarouselItem>
								<ul>																
									<li className="dyn_hp_offer">
										<div id="left-triangle-home"></div>
										<a className="" href="">
											<div className="dyn_hp_offer_thumb">
												<img width="300" height="255" src="https://ununsplash.imgix.net/reserve/unsplash_52d8277ccad75_1.JPG?fit=crop&fm=jpg&h=700&q=75&w=1050" className="attachment-medium wp-post-image" alt="kuba_24 THUMB"></img>
											</div>
										</a>
										<div className="dyn_hp_offer_txt">
											<a className="dyn_hp_offer_title" href="">
												<h2>Essa é a Doga</h2>
											</a>
											<a className="dyn_hp_offer_desc" href="">Dalo é um ser imortal</a>
										</div>
										<a className="more" href="">Veja mais &gt;</a>
									</li>
									<li className="dyn_hp_offer">
										<div id="left-triangle-home"></div>
										<a className="" href="">
											<div className="dyn_hp_offer_thumb">
												<img width="300" height="255" src="https://unsplash.imgix.net/reserve/vNE8214NS9GOvXOy7DCu_DSC_0266.JPG?fit=crop&fm=jpg&h=700&q=75&w=1050" className="attachment-medium wp-post-image" alt="kuba_24 THUMB"></img>
											</div>
										</a>
										<div className="dyn_hp_offer_txt">
											<a className="dyn_hp_offer_title" href="">
												<h2>Essa é a Doga</h2>
											</a>
											<a className="dyn_hp_offer_desc" href="">Dalo é um ser imortal</a>
										</div>
										<a className="more" href="">Veja mais &gt;</a>
									</li>														
								</ul>
							</CarouselItem>
							<CarouselItem>
								<ul>																
									<li className="dyn_hp_offer">
										<div id="left-triangle-home"></div>
										<a className="" href="">
											<div className="dyn_hp_offer_thumb">
												<img width="300" height="255" src="https://unsplash.imgix.net/uploads/141315993607248a8be6a/5cf8b62b?fit=crop&fm=jpg&h=700&q=75&w=1050" className="attachment-medium wp-post-image" alt="kuba_24 THUMB"></img>
											</div>
										</a>
										<div className="dyn_hp_offer_txt">
											<a className="dyn_hp_offer_title" href="">
												<h2>Essa é a Doga</h2>
											</a>
											<a className="dyn_hp_offer_desc" href="">Dalo é um ser imortal</a>
										</div>
										<a className="more" href="">Veja mais &gt;</a>
									</li>
									<li className="dyn_hp_offer">
										<div id="left-triangle-home"></div>
										<a className="" href="">
											<div className="dyn_hp_offer_thumb">
												<img width="300" height="255" src="https://ununsplash.imgix.net/reserve/zU6fwmDaSVWZdCXcZfot_IMG_3838.JPG?fit=crop&fm=jpg&h=700&q=75&w=1050" className="attachment-medium wp-post-image" alt="kuba_24 THUMB"></img>
											</div>
										</a>
										<div className="dyn_hp_offer_txt">
											<a className="dyn_hp_offer_title" href="">
												<h2>Essa é a Doga</h2>
											</a>
											<a className="dyn_hp_offer_desc" href="">Dalo é um ser imortal</a>
										</div>
										<a className="more" href="">Veja mais &gt;</a>
									</li>														
								</ul>
							</CarouselItem>
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