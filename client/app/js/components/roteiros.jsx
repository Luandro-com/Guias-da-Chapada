'use strict';
var React = require('react'),
	_ = require('lodash'),
	RoteirosItem = require('./roteiros/roteirosItem.jsx'),
	Roteiros = React.createClass({
	render: function() {
			var Items = [];
			_.forEach(this.props.atrativos, function(item) {
				Items.push(item);
			});
			_.forEach(this.props.roteiros, function(item) {
				Items.push(item);
			});
			var i = 2;
			var itemRow = _.map(Items, function(item, key) {
				if (i % 2 === 0) {
					i++;
					return (
						<div key={key} className="grid_50_h br">
							<RoteirosItem img={item.img} titulo={item.titulo} descricao={item.descricao} info={item.info} duracao={item.duracao} />
						</div>	
					);
				}
				else {
					i++;
					return (
						<div key={key} className="grid_50_h">
							<RoteirosItem img={item.img} titulo={item.titulo} info={item.info} descricao={item.descricao} duracao={item.duracao} />
						</div>	
					);
				}
				
			});
		return (
			<div classNameName="roteiros">
				<div className="grid_100">
					<h3 className="roteiros-h3">Explicação de como usar essa página</h3>
					<div className="hp_first_row">
						{itemRow}
					</div>
				</div>
			</div>	
		);
	}

});

module.exports = Roteiros;