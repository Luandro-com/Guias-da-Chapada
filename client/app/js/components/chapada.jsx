'use strict';
var React = require('react'),
	Chapada = React.createClass({

	render: function() {
		return (
		<div classNameName="chapada">
			<div className="chapada-img">
				<img src="https://ununsplash.imgix.net/photo-1416424500327-a57ace7358b8?fit=crop&fm=jpg&h=800&q=75&w=1050" />
			</div>
			<div className="grid_100">
				<div className="hp_first_row">
					<div className="grid_50_h br">
						<a href="">
							<h2 className="hp_dest">A Chapada dos Veadeiros</h2>
						</a>
						<div className="upcoming_txt">
							<p>Are selfies just selfish, or can you focus on yourself while also thinking of others? Launching the best selfie phone to date, we thought it was time to ask: Can a Selfie really do good?  Introducing The “Selfie Collection”, a fashion collection with a twist. All shot with the new Lumia 735. All selfies will contain a fashion item going up for auction, donating money to the fight against online bullying. Take a look around the “Selfie Collection”, go to the auction, and place your bid now.</p>
						</div>
					</div>
					<div className="grid_50_h">
						<a href=""><div className="grid_100 chapada-cerrado">
							<h2 className="hp_dest">O Cerrado</h2>
						</div></a>
						<a href=""><div className="grid_100 chapada-historia">
							<h2 className="hp_dest">História</h2>
						</div></a>
						<a href=""><div className="grid_100 chapada-cultura">
							<h2 className="hp_dest">Cultura</h2>
						</div></a>
					</div>
				</div>
			</div>
		</div>	
		);
	}

});

module.exports = Chapada;