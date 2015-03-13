'use strict';
var React = require('react'),
	_ = require('lodash'),
	InfoBox = require('google-maps-infobox'),
	ZoomControl = require('./ZoomControl.js'),
	MapaMap = React.createClass({
	    componentDidMount: function () {
	    		console.log('Map DidMount with markers : '+this.props.markers);
	    		var mapOptions = {
		            center: this.mapCenterLatLng(),
		            zoom: this.props.settings.initialZoom,
		            zoomControl: false,
		            panControl: false,
		            streetViewControl: false
	        	};
	            var map = new google.maps.Map(this.getDOMNode(), mapOptions);
	            var zoomControlDiv = document.createElement('div');
				var zoomControl = new ZoomControl(zoomControlDiv, map);
		 	 		zoomControlDiv.index = 1;
		  			map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
		  		var allMarkers = [];	
	            google.maps.event.addListener(map, "mouseover", function() { new InfoBox().close() });
	            console.log('All markers array is: '+allMarkers);
	            this.setMarkers(this.props.markers, map, allMarkers);
	            this.setState({
	            	map: map,
	            	allMarkers: allMarkers
	            });

	    },

	    mapCenterLatLng: function () {
	            return new google.maps.LatLng(this.props.settings.mapCenterLat, this.props.settings.mapCenterLng);
	    },
	    setMarkers: function (markers, map, allMarkers) {
	    	var allMarkers = [];
	    	_.map(markers, function(marker) {
	    		console.log('setMarkers maps values of marker as: '+marker);
	    		console.log('setMarkers maps values of map as: '+map);
	    		console.log('allMarkers maps values of map as: '+allMarkers);
	    		this.createMarkers(marker, map, allMarkers);
	    	}.bind(this));
	    },
	    createMarkers: function (marker, map, allMarkers) {
	    	
	    	console.log("createMarkes reads marker value as: "+marker);
	    	var boxId = "infobox"+marker.id;
	    	console.log('createMarkers creates infobox with boxId of: '+boxId);
	    	var newMarker = new google.maps.Marker({
		        position: new google.maps.LatLng(marker.lat, marker.lng),
		        map: map,
		        icon:'./dist/img/marker.png'
		     });
	    	allMarkers.push(newMarker);
	    	console.log('Markers array has: '+allMarkers);
	    	var newInfoBox = new InfoBox({
			    content: document.getElementById(boxId),
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
			google.maps.event.addListener(newMarker, 'mouseover', function() {
			    newInfoBox.open(map, this);
			    map.panTo(newMarker.getPosition());
			    map.panBy(0, -200);
			});
		    
		    return newMarker;
	    },
	    componentDidUpdate: function () {
	    	var mapOptions = {
	            center: this.mapCenterLatLng(),
	            zoom: this.props.settings.initialZoom
	        };
	        var allMarkers = this.state.allMarkers;
			var map = this.state.map;
	        map.setOptions(mapOptions);
	        this.setMarkers(this.props.markers, map, allMarkers);
	    },
		
	    render: function () {
	        return (
	        	<div id='map'>
	        		
	        	</div>
	        );
	    }

		});

module.exports = MapaMap;