'use strict';
var React = require('react'),
	_ = require('lodash'),
	InfoBox = require('google-maps-infobox'),
	ZoomControl = require('./ZoomControl.js'),
	MapaMap = React.createClass({
	    componentDidMount: function () {
	    		var mapOptions = {
		            center: this.mapCenterLatLng(),
		            zoom: this.props.settings.initialZoom,
		            zoomControl: false,
		            panControl: false,
		            streetViewControl: false,
		            styles: [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#abbaa4"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]},{"featureType":"road.highway","stylers":[{"color":"#ad9b8d"}]}]
	        	};

	        	var map = new google.maps.Map(this.getDOMNode(), mapOptions);
	        	var markersArray = [];
	        	
	        	var zoomControlDiv = document.createElement('div');
				var zoomControl = new ZoomControl(zoomControlDiv, map);
		 	 		zoomControlDiv.index = 1;
		  			map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);

		  		var newInfoBox = new InfoBox({
				    disableAutoPan: false,
				    maxWidth: 150,
				    pixelOffset: new google.maps.Size(-140, -450),
				    zIndex: null,
				    boxStyle: {
				                background: "#417505",
				                width: "330px",
				                height: "420px"
				        },    
				    closeBoxMargin: "12px 4px 2px 2px",
				    closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
				    infoBoxClearance: new google.maps.Size(1, 1)
				});	
		  		this.setState({
	            	map: map,
	            	markersArray: markersArray,
	            	Infobox: newInfoBox
	            });	
	    },

	    mapCenterLatLng: function () {
	            return new google.maps.LatLng(this.props.settings.mapCenterLat, this.props.settings.mapCenterLng);
	    },
	    setMarkers: function (markers, map, Infobox) {
	    	console.log("setmarkers");
    		_.map(markers, function(marker, key) {
    			console.log('Looping on markers to find ID: '+key);
    			this.createMarkers(marker, map, Infobox, key); 
    		}.bind(this));
	    },
	    createMarkers: function (marker, map, Infobox, key) {
	    	var boxId = "infobox"+key;
	    	console.log('createMarkers creates infobox with boxId of: '+boxId);
	    	var newMarker = new google.maps.Marker({
		        position: new google.maps.LatLng(marker.lat, marker.lng),
		        map: map,
		        icon:'./dist/img/marker.png'
		     });
	    	console.log('Before pushing to array: '+this.state.markersArray);
	    	this.state.markersArray.push(newMarker);
	    	console.log('Pushed new marker to array: '+this.state.markersArray);
			google.maps.event.addListener(newMarker, 'mouseover', function() {
				Infobox.setContent(document.getElementById(boxId));
			    Infobox.open(map, this);
			    map.panTo(newMarker.getPosition());
			    map.panBy(0, -200);
			});
		    
		    return newMarker;
	    },
		componentDidUpdate: function () {
			console.log(this.props.markers);
	    	var Infobox = this.state.Infobox;
	    	var map = this.state.map;
	    	var markersArray = this.state.markersArray;
	    	//change zoom e center
	    	var mapOptions = {
	            center: this.mapCenterLatLng(),
	            zoom: this.props.settings.initialZoom
	        };
	        this.setMarkers(this.props.markers, map, Infobox);
	        map.setOptions(mapOptions);
	    },
	    render: function () {
	        return (
	        	<div id='map'>
	        	</div>
	        );
	    }

		});

module.exports = MapaMap;