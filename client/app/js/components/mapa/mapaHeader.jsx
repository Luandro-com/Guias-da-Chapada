'use strict';
var React = require('react'),
	Link = require('react-router').Link,
	MapaHeader = React.createClass({

	render: function() {
		return (
			<nav>
	  			<div id="navigation" className="grid_100">
	    			<div>
	    				<ul className="word-rotate">
	    					<Link to="/"><li data-hover="Mapa Interativo">Guias da Chapada</li></Link>
							<a href="#"><li data-hover="Quem Somos">São Jorge</li></a>
							<a href="#"><li data-hover="A Chapada">Alto Paraíso</li></a>
							<a href="#"><li data-hover="Roteiros e Atrativos">Roteiros</li></a>
							<li id="menu-item-32">
								<ul>
									<li><a target="_blank" href="mailto:contato@guiasdachapada.com"><span className="icono-mail"></span></a></li>
									<li><a target="_blank" href="https://twitter.com/guias"><span className="icono-facebook"></span></a></li>
									<li><a target="_blank" href="https://www.facebook.com/guias"><span className="icono-instagram"></span></a></li>
								</ul>
							</li>
						</ul>
					</div>			
					<div className="clear"></div>
				</div>
			</nav>
		);
	}

});

module.exports = MapaHeader;