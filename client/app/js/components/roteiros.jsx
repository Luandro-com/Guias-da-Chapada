'use strict';
var React = require('react'),
	RoteirosItem = require('./roteiros/roteirosItem.jsx'),
	Roteiros = React.createClass({

	render: function() {
		return (
			<div classNameName="roteiros">
				<div className="grid_100">
					<h3 className="roteiros-h3">Explicação de como usar essa página</h3>
					<div className="hp_first_row">
						<RoteirosItem />
						<div className="grid_50_h">
							<div className="roteiros-item-wrapper">
								<div className="roteiros-item">
									<h3>Caminhos de São Jorge</h3>
									<div className="roteiros-img">
										<img src="https://ununsplash.imgix.net/photo-1418562478514-6ee501b780a5?fit=crop&fm=jpg&h=700&q=75&w=1050" />
										<p><span className="roteiros-dia">1</span> DIA</p>
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
							<div className="roteiros-item-wrapper">
								<div className="roteiros-item">
									<h3>Caminhos de São Jorge</h3>
									<div className="roteiros-img">
										<img src="https://unsplash.imgix.net/photo-1414589491349-2acf6131176e?fit=crop&fm=jpg&h=700&q=75&w=1050" />
										<p><span className="roteiros-dia">1</span> DIA</p>
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
							<div className="roteiros-item-wrapper">
								<div className="roteiros-item">
									<h3>Caminhos de São Jorge</h3>
									<div className="roteiros-img">
										<img src="https://ununsplash.imgix.net/photo-1417434743061-9873e0beaed6?fit=crop&fm=jpg&h=725&q=75&w=1050" />
										<p><span className="roteiros-dia">1</span> DIA</p>
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
		);
	}

});

module.exports = Roteiros;