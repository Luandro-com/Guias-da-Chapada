'use strict';

var React = require('react'),
	reqwest = require('reqwest'),
	
		Clima = React.createClass({
			getInitialState: function() {
				return {
					temperatura: " ",
					tempo: " ",
					icon: "http://openweathermap.org/img/w/50d.png"
				};
			},
			loadClima: function () {
				reqwest({
				    url: 'http://api.openweathermap.org/data/2.5/weather?lat=-14.13359&lon=-47.52079&units=metric&lang=pt'
				  , type: 'jsonp'
				  , method: 'get'
				  , error: function (err) { 
				  	console.log('erro!');
				  }
				  , success: function (resp) {
				  		console.log(resp.weather[0].description);
				      	var temperatura = (parseInt(resp.main.temp));
				      	var tempo = (resp.weather[0].description);
				      	var icon = (resp.weather[0].icon);
				      	var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
				      	this.setState({
				      		temperatura: temperatura,
				      		tempo: tempo,
				      		icon: iconUrl
				      	})
				  }.bind(this)
				});
			},
			componentDidMount: function() {
				this.loadClima();
			},
			render: function() {
				return (
				<div>
					<img src={this.state.icon} /> {this.state.temperatura}&deg; em Alto Paraíso com {this.state.tempo}
				</div>
					)
			}
		});

module.exports = Clima;