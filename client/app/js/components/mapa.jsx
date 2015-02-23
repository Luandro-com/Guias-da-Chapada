'use strict';
var React = require('react/addons'),
	MapaHeader = require('./mapa/mapaHeader.jsx'),
	MapaMap = require('./mapa/mapaMap.jsx'),
	InfoBoxes = require('./mapa/mapaInfoBoxes.jsx'),
	Mapa = React.createClass({
		getInitialState: function() {
			return {
				menua:'São Jorge',
				menub:'Alto Paraíso',
				menuc: 'Roteiros'
			};
		},
		render: function() {
			return (
				<div>
					<div classNameName="outer_wrap">
						<div classNameName="inner_wrap">
							<MapaHeader items={['Porco', 'Marmelo']} />
			    			<div classNameName="clear"></div>
			    			<MapaMap />
						</div>
					</div>
				    <InfoBoxes />
				</div>
			);
		}

});

module.exports = Mapa;