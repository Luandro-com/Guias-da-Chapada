'use strict';

var RoteirosItem = React.createClass({
	render: function() {
		return (
			<div className="grid_50_h br">
				<div className="roteiros-item-wrapper">
					<div className="roteiros-item">
						<h3>Caminhos de São Jorge</h3>
						<div className="roteiros-img">
							<img src="https://unsplash.imgix.net/photo-1419064642531-e575728395f2?fit=crop&fm=jpg&h=700&q=75&w=1050" />
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
		);
	}
});

module.exports = RoteirosItem;