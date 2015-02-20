'use strict';
var React = require('react'),
	InfoBox = require('google-maps-infobox'),
	MapaMap = React.createClass({
	getDefaultProps: function () {
        return {
            initialZoom: 12,
            mapCenterLat: -14.137153,
            mapCenterLng: -47.519503,
        };
    },
    componentDidMount: function (rootNode) {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom
        },
        map = new google.maps.Map(this.getDOMNode(), mapOptions);
        var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map});
        infobox = new InfoBox({
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

		google.maps.event.addListener(marker, 'mouseover', function() {
		    infobox.open(map, this);
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