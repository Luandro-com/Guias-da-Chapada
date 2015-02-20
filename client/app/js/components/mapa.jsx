'use strict';
var React = require('react/addons'),
	MapaHeader = require('./mapa/mapaHeader.jsx'),
	MapaMap = require('./mapa/mapaMap.jsx'),
	Mapa = React.createClass({
		render: function() {
			return (
				<div>
					<div id="wrapper">
						<div className="outer_wrap">
							<div className="inner_wrap">
								<MapaHeader />
				    			<div className="clear"></div>
				    			<MapaMap />
							</div>
						</div>
					</div>
				</div>
			);
		}

});

module.exports = Mapa;