'use strict';
var React = require('react'),
	Router = require('react-router'),
  	RouteHandler = Router.RouteHandler,
  	Link = Router.Link,
  	Route = Router.Route,
	Chapada = React.createClass({
	Displayname:"Chapada",
		
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
						<RouteHandler/>
					</div>
					<div className="grid_50_h">
						<Link to="cerrado"><div className="grid_100 chapada-cerrado">
							<h2 className="hp_dest">O Cerrado</h2>
						</div></Link>
						<Link to="historia"><div className="grid_100 chapada-historia">
							<h2 className="hp_dest">História</h2>
						</div></Link>
						<Link to="cultura"><div className="grid_100 chapada-cultura">
							<h2 className="hp_dest">Cultura</h2>
						</div></Link>
					</div>
				</div>
			</div>
		</div>	
		);
	}

});


module.exports = Chapada;