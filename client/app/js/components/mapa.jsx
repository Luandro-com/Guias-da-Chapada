'use strict';
var React = require('react/addons'),
	MapaHeader = require('./mapa/mapaHeader.jsx'),
	MapaMap = require('./mapa/mapaMap.jsx'),
	InfoBoxes = require('./mapa/mapaInfoBoxes.jsx'),
	Mapa = React.createClass({
		getInitialState: function() {
			var MENU_ITEMS = {
				menua: 'Alto Paraíso', 
				menub: 'São Jorge', 
				menuc: 'Roteiros'
			};
			var MAP_SETTINGS = {
				initialZoom: 11,
	            mapCenterLat: -14.137153,
	            mapCenterLng: -47.519503
			};
			var MARKER_ITEMS = [
				[-14.210744, -47.473297, 'Cachoeira dos Macacos', 'slide', '4x4', 0 ],
				[-14.177038, -47.813581, 'Cachoeira dos Anjos', 'slide', 'bike', 1 ]
			];
			return {
				menu: MENU_ITEMS,
				settings: MAP_SETTINGS,
				markers: MARKER_ITEMS
			};
		},
		onMenuAClick: function () {
			console.log('HELLO');
		},

		render: function() {
			return (
				<div>
					<div classNameName="outer_wrap">
						<div classNameName="inner_wrap">
							<MapaHeader menu={this.state.menu} />
			    			<div classNameName="clear"></div>
			    			<MapaMap markers={this.state.markers} settings={this.state.settings} />
						</div>
					</div>
				    <InfoBoxes boxes={this.state.markers} />
				</div>
			);
		}

});

module.exports = Mapa;