'use strict';

var React = require('react'),
	InfoBox = require('google-maps-infobox'),
	ZoomControl = require('./ZoomControl.js'),
	MapaMap = React.createClass({
    componentDidMount: function (rootNode) {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.settings.initialZoom,
            disableDefaultUI: true
        },
        map = new google.maps.Map(this.getDOMNode(), mapOptions);
        	// Create the DIV to hold the control and call the ZoomControl() constructor
		  // passing in this DIV.
		  var zoomControlDiv = document.createElement('div');
		  var zoomControl = new ZoomControl(zoomControlDiv, map);
 	 		zoomControlDiv.index = 1;
  			map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
  		{/*var map_markers = this.props.markers.map(function (marker) {
  			return (
  				var marker_{marker.id} = new google.maps.Marker({position: new google.maps.LatLng({marker.latitude}, {marker.longitude}), title: 'Hi', icon:'./dist/img/marker.png', map: map});
  				);
  		});
        var marker = new google.maps.Marker({position: new google.maps.LatLng(-14.210744, -47.473297), title: 'Hi', icon:'./dist/img/marker.png', map: map});
        var marker2 = new google.maps.Marker({position: new google.maps.LatLng(-14.061744, -47.466086), title: 'Hi', icon:'./dist/img/marker.png',	 map: map});
        var markerAP = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', icon:'./dist/img/marker-AP.png',	 map: map});
        var markerSJ = new google.maps.Marker({position: new google.maps.LatLng(-14.177038, -47.813581), title: 'Hi', icon:'./dist/img/marker-SJ.png',	 map: map});
        */}
        var marker, i;
        
	    for (i = 0; i < this.props.markers.length; i++) {  
	    	var newInfoBox = "infobox"+i;
	    	var newMarker = "marker"+i;
	    	console.log(newMarker);
		      newMarker = new google.maps.Marker({
		        position: new google.maps.LatLng(this.props.markers[i][0], this.props.markers[i][1]),
		        map: map,
		        icon:'./dist/img/marker.png'
		      });
		      console.log(newInfoBox);
		      var newInfoBox = new InfoBox({
			    content: document.getElementById(newInfoBox),
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
		      console.log(newInfoBox);
		      google.maps.event.addListener(newMarker, 'mouseover', function() {
			    //infobox2.close(map, this);
			    newInfoBox.open(map, this);
			    console.log(this);
			    map.panTo(newMarker.getPosition());
			    map.panBy(0, -200);
			});
		      console.log(newInfoBox);
	    }

        this.setState({map: map});

    },
    mapCenterLatLng: function () {
        return new google.maps.LatLng(this.props.settings.mapCenterLat, this.props.settings.mapCenterLng);
    },
    render: function () {
        return (
        	<div id='map'></div>
        );
    }

	});

module.exports = MapaMap;