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
	    					<Link to="/"><li>Guias da Chapada</li></Link>
							<a onClick={this.props.onMenuAClick}><li>{this.props.menu.menua}</li></a>
							<a onClick={this.props.onMenuAClick}><li>{this.props.menu.menub}</li></a>
							<a onClick={this.props.onMenuAClick}><li>{this.props.menu.menuc}</li></a>
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