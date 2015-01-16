'use strict';
var React = require('react'),
	Quem = React.createClass({

	render: function() {
		return (
			<div className="quem">
				<div className="outer_wrap">
					<div className="inner_wrap">
						<div className="quem-img">
							<img src="https://unsplash.imgix.net/photo-1413977886085-3bbbf9a7cf6e?fit=crop&fm=jpg&h=700&q=75&w=1050" />
						</div>
						<div className="grid_100">
							<div className="hp_first_row">
								<div className="grid_50_h br">
									<a href="">
										<h2 className="hp_dest">Quem somos</h2>
									</a>
									<div className="upcoming_txt">
										<p>Are selfies just selfish, or can you focus on yourself while also thinking of others? Launching the best selfie phone to date, we thought it was time to ask: Can a Selfie really do good?  Introducing The “Selfie Collection”, a fashion collection with a twist. All shot with the new Lumia 735. All selfies will contain a fashion item going up for auction, donating money to the fight against online bullying. Take a look around the “Selfie Collection”, go to the auction, and place your bid now.</p>
									</div>
								</div>
								<div className="grid_50_h">
									<div className="grid_100">
										<div className="grid_33 quem-pic">
											<img src="dist/img/slide.jpg" />
										</div>
										<div className="grid_33 quem-pic">
											<img src="dist/img/slide.jpg" />
										</div>
										<div className="grid_33 quem-pic-right">
											<img src="dist/img/slide.jpg" />
										</div>
									</div>
									<div className="grid_100">
										<div className="grid_33 quem-pic">
											<img src="dist/img/slide.jpg" />
										</div>
										<div className="grid_33 quem-pic">
											<img src="dist/img/slide.jpg" />
										</div>
										<div className="grid_33 quem-pic-right">
											<img src="dist/img/slide.jpg" />
										</div>
									</div>
									<div className="grid_100">
										<div className="grid_33 quem-pic">
											<img src="dist/img/slide.jpg" />
										</div>
										<div className="grid_33 quem-pic">
											<img src="dist/img/slide.jpg" />
										</div>
										<div className="grid_33 quem-pic-right">
											<img src="dist/img/slide.jpg" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>	
		);
	}

});

module.exports = Quem;