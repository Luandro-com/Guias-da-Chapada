'use strict';
var React = require('react'),
	OndeItem = require('./onde/ondeItem.jsx'),
	Onde = React.createClass({

	render: function() {
		return (
			<div className="onde">
				<div classNameName="onde">
					<div className="grid_100">
						<h3 className="onde-h3">Explicação de como usar essa página</h3>
						<div className="hp_first_row">
							<OndeItem />
							<div className="grid_50_h">
								<div className="onde-item-wrapper">
									<div className="onde-item">
										<h3>Caminhos de São Jorge</h3>
										<div className="onde-img">
											<img src="https://unsplash.imgix.net/photo-1416339442236-8ceb164046f8?fit=crop&fm=jpg&h=775&q=75&w=1050" />
											<p><span className="onde-dia">1</span> DIA</p>
										</div>
										<ul>
											<li><i className="fa fa-bicycle"></i></li>
											<li><i className="fa fa-car"></i></li>
											<li><i className="fa fa-bar-chart"></i></li>
											<li><i className="fa fa-cutlery"></i></li>
											<li><div className="fb-like" data-href="http://luandro.com" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="grid_100">
						<div className="hp_first_row">
							<div className="grid_50_h br">
								<div className="onde-item-wrapper">
									<div className="onde-item">
										<h3>Caminhos de São Jorge</h3>
										<div className="onde-img">
											<img src="https://ununsplash.imgix.net/photo-1416339306562-f3d12fefd36f?fit=crop&fm=jpg&h=800&q=75&w=1050" />
											<p><span className="onde-dia">1</span> DIA</p>
										</div>
										<ul>
											<li><i className="fa fa-bicycle"></i></li>
											<li><i className="fa fa-car"></i></li>
											<li><i className="fa fa-bar-chart"></i></li>
											<li><i className="fa fa-cutlery"></i></li>
											<li><div className="fb-like" data-href="http://luandro.com" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="grid_50_h">
								<div className="onde-item-wrapper">
									<div className="onde-item">
										<h3>Caminhos de São Jorge</h3>
										<div className="onde-img">
											<img src="https://ununsplash.imgix.net/photo-1416339276121-ba1dfa199912?fit=crop&fm=jpg&h=800&q=75&w=1050" />
											<p><span className="onde-dia">1</span> DIA</p>
										</div>
										<ul>
											<li><i className="fa fa-bicycle"></i></li>
											<li><i className="fa fa-car"></i></li>
											<li><i className="fa fa-bar-chart"></i></li>
											<li><i className="fa fa-cutlery"></i></li>
											<li><div className="fb-like" data-href="http://luandro.com" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div></li>
										</ul>
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

module.exports = Onde;