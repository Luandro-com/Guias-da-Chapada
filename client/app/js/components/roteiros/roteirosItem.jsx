'use strict';

var RoteirosItemInfo = require('./roteirosItemInfo.jsx'),
	RoteirosItem = React.createClass({
	render: function() {
		return (
			<div className="grid_50_h br">
				<div className="roteiros-item-wrapper">
					<div className="roteiros-item">
						<h3>Caminhos de São Jorge</h3>
						<div className="roteiros-img">
							<img src="https://unsplash.imgix.net/photo-1419064642531-e575728395f2?fit=crop&fm=jpg&h=700&q=75&w=1050" />
							<p><span className="roteiros-dia">1</span> DIA</p>
							<figcaption>
								<div className="roteiros-box">
									<p>rain wonton soup camera claymore mine dissident savant bridge papier-mache franchise saturation point sign crypto- spook otaku bicycle long-chain hydrocarbons industrial grade Tokyo faded computer woman chrome Kowloon table face forwards realism vinyl voodoo god pen plastic Legba smart- human garage monofilament city -ware narrative paranoid construct office assassin apophenia convenience store San Francisco dolphin network bomb hacker vehicle shoes knife digital into corporation j-pop disposable sprawl assault systemic cartel tattoo pistol boat refrigerator tower car katana ablative shanty town nodal point sentient</p>
									<button>ver no mapa</button>
								</div>
								<button>Três diárias</button>
								<button>Agendar</button>								
							</figcaption>
						</div>
						<ul>
							<RoteirosItemInfo />
							<li><i className="fa fa-car"></i></li>
							<li><i className="fa fa-bar-chart"></i></li>
							<li><i className="fa fa-cutlery"></i></li>
							<li><div className="fb-like" data-href="http://luandro.com" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = RoteirosItem;