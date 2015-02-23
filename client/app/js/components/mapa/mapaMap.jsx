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
        
		  var zoomControlDiv = document.createElement('div');
		  var zoomControl = new ZoomControl(zoomControlDiv, map);
 	 		zoomControlDiv.index = 1;
  			map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);

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
	    };

        this.setState({map: map});

    },
    componentDidUpdate: function() {
    	var map = this.state.map;
        map.panTo(this.mapCenterLatLng());
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