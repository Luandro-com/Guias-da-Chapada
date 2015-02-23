'use strict';
var React = require('react'),
	Chapada = React.createClass({
	Displayname:"Chapada",
	getDefaultProps: function() {
		return {
			textos : {
				Intro: "Aqui vai várias informações sobre a Chapada. Boa pesquisa para meus amigos guias.",
				Cerrado: "Infor sobre o cerrado",
				Historia: "Info sobre a historia",
				Cultura: "Info sobre a cultura" 
			}
		};
	},
	getInitialState: function() {
		
		return {
			texto: this.props.textos.Intro
		};
	},
	tabClickA: function () {
		this.setState({
			texto: this.props.textos.Cerrado
		});
	},
	tabClickB: function () {
		this.setState({
			texto: this.props.textos.Historia
		});
	},
	tabClickC: function () {
		this.setState({
			texto: this.props.textos.Cultura
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
						<a href="">
							<h2 className="hp_dest">A Chapada dos Veadeiros</h2>
						</a>
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