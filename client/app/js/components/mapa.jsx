'use strict';
var React = require('react/addons'),
	_ = require('lodash'),
	MapaHeader = require('./mapa/mapaHeader.jsx'),
	MapaMap = require('./mapa/mapaMap.jsx'),
	InfoBoxes = require('./mapa/mapaInfoBoxes.jsx'),

	Mapa = React.createClass({
		loadData: function () {
			var myFirebaseRef = new Firebase("https://guias.firebaseio.com/");
		        myFirebaseRef.child("mapa").on("value", function(snapshot) {
		        		var fireMarkers = snapshot.val();
		        		console.log('Firebase generates the markers as: '+fireMarkers);
		        		var mapChapada = _.where(fireMarkers, {'categoria': 'atrativo'}),
		        			mapSj = _.where(fireMarkers, {'local': 'SJ'}),
		        			mapAp = _.where(fireMarkers, {'local': 'AP'});
				        this.setState({
				        	chapadaMarkers: mapChapada,
				        	sjMarkers: mapSj,
				        	apMarkers: mapAp,
				        	markers: mapChapada
				        });

		    		}.bind(this));
		},
		getInitialState: function() {
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
			var MARKER_ITEMS = {};
			
			return {
				menu: MENU_ITEMS,
				settings: MAP_SETTINGS,
				markers: MARKER_ITEMS
			}
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
					markers: this.state.apMarkers
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
					markers: this.state.chapadaMarkers
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
					markers: this.state.sjMarkers
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
			console.log("From mapa.jsx / this.state.markes = "+this.state.markers);
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
	    				settings={this.state.settings}
	    				atrativos={this.props.atrativos} />
				    <InfoBoxes markers={this.props.atrativos} />
				</div>
			);
		}

});

module.exports = Mapa;