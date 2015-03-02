'use strict';
var React = require('react/addons'),
	MapaHeader = require('./mapa/mapaHeader.jsx'),
	MapaMap = require('./mapa/mapaMap.jsx'),
	InfoBoxes = require('./mapa/mapaInfoBoxes.jsx'),

	Mapa = React.createClass({
		loadData: function () {
			var myFirebaseRef = new Firebase("https://guias.firebaseio.com/");
		        myFirebaseRef.child("mapa").on("value", function(snapshot) {
		        		var fireMarkers = snapshot.val();
				        this.setState({
				        	markers: fireMarkers
				        });

		    		}.bind(this));
		},
		getInitialState: function() {
			this.loadData();
			var MENU_ITEMS = {
				menua: 'Alto Paraíso', 
				menub: 'São Jorge', 
				menuc: 'Roteiros',
				cidade: 'Chapada'
			};
			var MAP_SETTINGS = {
				initialZoom: 11,
	            mapCenterLat: -14.137153,
	            mapCenterLng: -47.519503
			};
			var MARKER_ITEMS = [
				{
					lat: -14.210744, 
					lng: -47.473297, 
					title: 'Cachoeira dos Anões', 
					img: 'slide', 
					info: '4x4' },
				{
					lat: -14.137153, 
					lng: -47.519503, 
					title: 'Cachoeira dos Arcanjos', 
					img: 'slide', 
					info: 'bike' }	
			];
			return {
				menu: MENU_ITEMS,
				settings: MAP_SETTINGS,
				markers: MARKER_ITEMS
			};
		},
		onMenuAClick: function () {
			if (this.state.menu.cidade === 'Chapada') {
				this.setState({
					menu : {
						menua: 'Atrativos',
						menub: 'Onde comer',
						menuc: 'Onde ficar',
						cidade: 'AP'
					},
					settings: {
						initialZoom: 15,
						mapCenterLat: -14.137153,
	            		mapCenterLng: -47.519503
					},
					markers: [
						{
							id: 0,
							lat: -14.210744, 
							lng: -47.473297, 
							titulo: 'Restaurante em Alto', 
							img: 'slide', 
							info: '4x4' },
						{
							id: 1,
							lat: -14.137153, 
							lng: -47.519503, 
							titulo: 'Restaurante em Alto 2', 
							img: 'slide', 
							info: 'bike' }	
					]
				});
			}
			else {
				this.setState({
					menu : {
						menua: 'Alto Paraíso',
						menub: 'São Jorge',
						menuc: 'Roteiros',
						cidade: 'Chapada'
					},
					settings: {
						initialZoom: 11,
						mapCenterLat: -14.137153,
	            		mapCenterLng: -47.519503
					},
					markers: [
						{
							id: 2,
							lat: -14.210744, 
							lng: -47.473297, 
							title: 'Cachoeira dos Macacos', 
							img: 'slide', 
							info: '4x4' },
						{
							id: 3,
							lat: -14.137153, 
							lng: -47.519503, 
							title: 'Cachoeira dos Anjos', 
							img: 'slide', 
							info: 'bike' }	
					]
				});
			}
			
		},
		onMenuBClick: function () {
			if (this.state.menu.menub === 'São Jorge') {
				this.setState({
					menu : {
						menua: 'Atrativos',
						menub: 'Onde comer',
						menuc: 'Onde ficar',
						cidade: 'SJ'
					},
					settings: {
						initialZoom: 15,
						mapCenterLat: -14.177038,
	            		mapCenterLng: -47.813581
					},
					markers: [
						{
							id: 0,
							lat: -14.176374, 
							lng: -47.816556, 
							title: 'Restaurante em São Jorge', 
							img: 'slide', 
							info: '4x4' },
						{
							id: 1,
							lat: -14.177038, 
							lng: -47.813581, 
							title: 'Restaurante em São Jorge 2', 
							img: 'slide', 
							info: 'bike' }	
					]
				});
			}
			else if (this.state.menu.cidade === 'SJ') {
				console.log('Estamos em SJ');
				this.setState({
					settings: {
						initialZoom: 10,
						mapCenterLat: -14.137153,
	            		mapCenterLng: -47.519503
					}
				});
			}
		},
		onMenuCClick: function () {
			
		},

		render: function() {
			return (
				<div className='map-container'>
					<MapaHeader 
						menu={this.state.menu} 
						onMenuAClick={this.onMenuAClick}
						onMenuBClick={this.onMenuBClick}
						onMenuCClick={this.onMenuCClick} />
	    			<div classNameName="clear"></div>
	    			<MapaMap 
	    				markers={this.state.markers} 
	    				settings={this.state.settings} />
				    <InfoBoxes boxes={this.state.markers} />
				</div>
			);
		}

});

module.exports = Mapa;