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
							<Link to="mapa"><li>Mapa Interativo</li></Link>
							<Link to="quem"><li>Quem Somos</li></Link>
							<Link to="chapada"><li>A Chapada</li></Link>
							<Link to="roteiros"><li>Roteiros e Atrativos</li></Link>
							<Link to="onde"><li id="menu-item-32">Onde Fica e Comer</li></Link>
						</ul>
					</div>     
					<div className="clear"></div>
				</div>
			</nav>
					)
			}
		});

module.exports = NavBar;