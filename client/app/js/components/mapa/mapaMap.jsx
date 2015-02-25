'use strict';
var React = require('react'),
	InfoBox = require('google-maps-infobox'),
	ZoomControl = require('./ZoomControl.js'),
	MapaMap = React.createClass({
	    componentDidMount: function () {
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
	            google.maps.event.addListener(map, "mouseover", function() { new InfoBox().close() });
	            this.setMarkers(this.props.markers, map);
	            this.setState({map: map});
	    },

	    mapCenterLatLng: function () {
	            return new google.maps.LatLng(this.props.settings.mapCenterLat, this.props.settings.mapCenterLng);
	    },
	    setMarkers: function (markers, map) {
	    	for (var i = 0; i < markers.length; i++) {
			   this.createMarkers(markers[i], map);
			 }
	    },
	    createMarkers: function (markers, map) {
	    	var boxId = "infobox"+markers.id;
	    	var newMarker = new google.maps.Marker({
		        position: new google.maps.LatLng(markers.lat, markers.lng),
		        map: map,
		        icon:'./dist/img/marker.png'
		     });
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
			var map = this.state.map;
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