'use strict';
var React = require('react'),
	Chapada = React.createClass({
	Displayname:"Chapada",
	getInitialState: function() {
		return {
			texto: this.props.achapadaIntro,
			title: 'A Chapada dos Veadeiros'
		};
	},
	tabClickA: function () {
		this.setState({
			texto: this.props.achapadaCerrado,
			title: 'O Cerrado'
		});
	},
	tabClickB: function () {
		this.setState({
			texto: this.props.achapadaHistoria,
			title: 'A História da Chapada'
		});
	},
	tabClickC: function () {
		this.setState({
			texto: this.props.achapadaCultura,
			title: 'Nossa Cultura'
		});
	},
		
	render: function() {
		return (
		<div classNameName="chapada">
			<div className="chapada-img">
				<img src="https://ununsplash.imgix.net/photo-1416424500327-a57ace7358b8?fit=crop&fm=jpg&h=800&q=75&w=1050" />
			</div>
			<div className="grid_100">
				<div className="hp_first_row">
					<div className="grid_50_h br">
						<h2 className="hp_dest">{this.state.title}</h2>
						<div className="upcoming_txt" id="chapada-handler">
							{this.state.texto}
						</div>
					</div>
					<div className="grid_50_h">
						<a onClick={this.tabClickA}><div className="grid_100 chapada-cerrado">
							<h2 className="hp_dest">O Cerrado</h2>
						</div></a>
						<a onClick={this.tabClickB}><div className="grid_100 chapada-historia">
							<h2 className="hp_dest">História</h2>
						</div></a>
						<a onClick={this.tabClickC}><div className="grid_100 chapada-cultura">
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