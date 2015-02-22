'use strict';

var React = require('react'),
	InfoBox = require('google-maps-infobox'),
	ZoomControl = require('./ZoomControl.js'),
	MapaMap = React.createClass({
	getDefaultProps: function () {
        return {
            initialZoom: 11,
            mapCenterLat: -14.137153,
            mapCenterLng: -47.519503,
        };
    },
    componentDidMount: function (rootNode) {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom,
            disableDefaultUI: true
        },
        map = new google.maps.Map(this.getDOMNode(), mapOptions);
        	// Create the DIV to hold the control and call the ZoomControl() constructor
		  // passing in this DIV.
		  var zoomControlDiv = document.createElement('div');
		  var zoomControl = new ZoomControl(zoomControlDiv, map);
 	 		zoomControlDiv.index = 1;
  			map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
  		//Markers	
        var marker = new google.maps.Marker({position: new google.maps.LatLng(-14.210744, -47.473297), title: 'Hi', icon:'./dist/img/marker.png', map: map});
        var marker2 = new google.maps.Marker({position: new google.maps.LatLng(-14.061744, -47.466086), title: 'Hi', icon:'./dist/img/marker.png',	 map: map});
        var markerAP = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', icon:'./dist/img/marker-AP.png',	 map: map});
        var markerSJ = new google.maps.Marker({position: new google.maps.LatLng(-14.177038, -47.813581), title: 'Hi', icon:'./dist/img/marker-SJ.png',	 map: map});
        this.setState({map: map});
        var infobox = new InfoBox({
		    content: document.getElementById("infobox1"),
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
		var infobox2 = new InfoBox({
		    content: document.getElementById("infobox2"),
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

		google.maps.event.addListener(marker, 'mouseover', function() {
		    infobox2.close(map, this);
		    infobox.open(map, this);
		    map.panTo(marker.getPosition());
		    map.panBy(0, -200);
		});
		google.maps.event.addListener(marker2, 'mouseover', function() {
		    infobox.close(map, this);
		    infobox2.open(map, this);
		    map.panTo(marker.getPosition());
		    map.panBy(0, -200);
		});
    },
    mapCenterLatLng: function () {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    },
    render: function () {
        return (
        	<div id='map'></div>
        );
    }

	});

module.exports = MapaMap;