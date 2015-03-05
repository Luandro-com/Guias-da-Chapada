'use strict';

var React = require('react'),
	reqwest = require('reqwest'),
	
		Clima = React.createClass({
			componentDidMount: function() {
				reqwest({
				    url: 'http://api.openweathermap.org/data/2.5/weather?lat=-14.13359&lon=-47.52079'
				  , type: 'json'
				  , method: 'post'
				  , error: function (err) { }
				  , success: function (resp) {
				      console.log(resp.main);
				    }
				})
			},
			render: function() {
				return (
				<div>
					Clima em Alto Paraíso
				</div>
					)
			}
		});

module.exports = Clima;