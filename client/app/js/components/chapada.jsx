'use strict';
var React = require('react'),
	Router = require('react-router'),
  	RouteHandler = Router.RouteHandler,
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
						<div className="upcoming_txt" id="chapada-handler">
							Aqui vai várias informações sobre a Chapada. Boa pesquisa para meus amigos guias.
						</div>
					</div>
					<div className="grid_50_h">
						<a to="cerrado"><div className="grid_100 chapada-cerrado">
							<h2 className="hp_dest">O Cerrado</h2>
						</div></a>
						<a to="cerrado"><div className="grid_100 chapada-historia">
							<h2 className="hp_dest">História</h2>
						</div></a>
						<a to="cerrado"><div className="grid_100 chapada-cultura">
							<h2 className="hp_dest">Cultura</h2>
						</div></a>
					</div>
				</div>
			</div>
		</div>	
		);
	}

});

var Cerrado = React.createClass({
mixins: [ Router.State ],
	render: function() {
		return (
			<p>
				Essa é a porra do Cerrado mermão!
			</p>
		);
	}
});
var Historia = React.createClass({
mixins: [ Router.State ],
	render: function() {
		return (
			<p>
				Essa é a porra do Historia mermão!
			</p>
		);
	}
});
var Cultura = React.createClass({
mixins: [ Router.State ],
	render: function() {
		return (
			<p>
				Essa é a porra do Cultura mermão!
			</p>
		);
	}
});

module.exports = Cerrado;
module.exports = Historia;
module.exports = Cultura;
module.exports = Chapada;