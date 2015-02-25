'use strict';

var React = require('react'),
	InfoBox = require('google-maps-infobox'),
	MapaZoom = require('./mapaZoom.jsx'),
	MapaMap = React.createClass({

    componentDidMount: function () {
            var mapOptions = {
                    center: this.mapCenterLatLng(),
                    zoom: this.props.settings.initialZoom
            },
            map = new google.maps.Map(this.getDOMNode(), mapOptions);
        var marker, i;
	    for (i = 0; i < this.props.markers.length; i++) {  
	    	var newInfoBox = "infobox"+i;
	    	var newMarker = "marker"+i;
	    	var boxId = "infobox"+ this.props.markers[i].id;
		      newMarker = new google.maps.Marker({
		        position: new google.maps.LatLng(this.props.markers[i].lat, this.props.markers[i].lng),
		        map: map,
		        icon:'./dist/img/marker.png'
		      });
		      newInfoBox = new InfoBox({
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
			    //infobox2.close(map, this);
			    newInfoBox.open(map, this);
			    map.panTo(newMarker.getPosition());
			    map.panBy(0, -200);
			});
	    };
            this.setState({map: map});
    },

    mapCenterLatLng: function () {

            return new google.maps.LatLng(this.props.settings.mapCenterLat, this.props.settings.mapCenterLng);
    },

    componentDidUpdate: function () {
		var map = this.state.map;
		var mapOptions = {
	        center: this.mapCenterLatLng(),
	        zoom: this.props.settings.initialZoom
        };
        map.setOptions(mapOptions);
        var marker, i;
	    for (i = 0; i < this.props.markers.length; i++) {  
	    	var newInfoBox = "infobox"+i;
	    	var newMarker = "marker"+i;
	    	var boxId = "infobox"+ this.props.markers[i].id;
		      newMarker = new google.maps.Marker({
		        position: new google.maps.LatLng(this.props.markers[i].lat, this.props.markers[i].lng),
		        map: map,
		        icon:'./dist/img/marker.png'
		      });
		      newInfoBox = new InfoBox({
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
			    //infobox2.close(map, this);
			    newInfoBox.open(map, this);
			    map.panTo(newMarker.getPosition());
			    map.panBy(0, -200);
			});
	    };

    },
		
	    render: function () {
	        return (
	        	<div id='map'>
	        	</div>
	        	
	        );
	    }

		});

module.exports = MapaMap;