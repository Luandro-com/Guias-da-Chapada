'use strict';

var React = require('react'),
	Router = require('react-router'),
		Link = Router.Link,

		NavBar = React.createClass({
			render: function() {
				return (
			<nav>
				<div id="navigation" className="grid_100">
					<div>
						<ul className="word-rotate">
							<a href="./mapa.html"><li>Mapa Interativo</li></a>
							<Link to="Quem"><li>Quem Somos</li></Link>
							<Link to="Chapada"><li>A Chapada</li></Link>
							<Link to="Roteiros"><li>Roteiros e Atrativos</li></Link>
							<Link to="Onde"><li id="menu-item-32">Onde Fica e Comer</li></Link>
						</ul>
					</div>     
					<div className="clear"></div>
				</div>
			</nav>
					)
			}
		});

module.exports = NavBar;