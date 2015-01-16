'use strict';

var OndeItem = React.createClass({
	render: function() {
		return (
			<div className="grid_50_h br">
				<div className="onde-item-wrapper">
					<div className="onde-item">
						<h3>Caminhos de São Jorge</h3>
						<div className="onde-img">
							<img src="https://ununsplash.imgix.net/photo-1416339672936-7fe434088e8c?fit=crop&fm=jpg&h=800&q=75&w=1050" />
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
		);
	}
});

module.exports = OndeItem;