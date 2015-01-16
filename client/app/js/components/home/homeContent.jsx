'use strict';
var React = require('react'),
	HomeContent = React.createClass({
		render: function () {
			return (
			<div className="home-content">	
				<div className="grid_100">
					<div className="hp_first_row">
						<div className="grid_50_h br">
							<a href="">
								<h2 className="hp_dest">Quem somos</h2>
							</a>
							<div className="upcoming_txt">
								<p>Are selfies just selfish, or can you focus on yourself while also thinking of others? Launching the best selfie phone to date, we thought it was time to ask: Can a Selfie really do good?  Introducing The “Selfie Collection”, a fashion collection with a twist. All shot with the new Lumia 735. All selfies will contain a fashion item going up for auction, donating money to the fight against online bullying. Take a look around the “Selfie Collection”, go to the auction, and place your bid now.</p>
								<a className="more" href="">Veja mais &gt;</a>
							</div>
						</div>
						<div className="grid_50_h">
							<h2 className="hp_dest">Chapada dos Veadeiros</h2>
							<div className="upcoming_txt">
								<p>Are selfies just selfish, or can you focus on yourself while also thinking of others? Launching the best selfie phone to date, we thought it was time to ask: Can a Selfie really do good?  Introducing The “Selfie Collection”, a fashion collection with a twist. All shot with the new Lumia 735. All selfies will contain a fashion item going up for auction, donating money to the fight against online bullying. Take a look around the “Selfie Collection”, go to the auction, and place your bid now.</p>
								<a className="more" href="">Veja mais &gt;</a>
							</div>
						</div>
					</div>
				</div>

				<div className="grid_100 travel">
					<div className="grid_49 br">
						<h2 className="home-mapa-h2">Mapa Interativo</h2>
						<img className="hp_travel" src="https://unsplash.imgix.net/45/eDLHCtzRR0yfFtU0BQar_sylwiabartyzel_themap.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050" title="" alt=""></img>
					</div>
					<div className="grid_49">
						<ul className="travel_guide_hp">
							<a href="">
								<li className="bb"><img className="" src="" title="" alt=""></img>Encontre onde comer e dormir</li>
							</a>
							<a href="">
								<li className="bb"><img className="" src="" title="" alt=""></img>Vote nos melhores</li>
							</a>
							<a href="">
								<li className="bb"><img className="" src="" title="" alt=""></img>Descubra as maravilhas da Chapada</li>
							</a>
							<a href="">
								<li className="bb"><img className="" src="" title="" alt=""></img>Vejas nossas dicas de roteiros</li>
							</a>
						</ul>
					</div>
				</div>
			</div>	
			);
		}
	});
module.exports = HomeContent;