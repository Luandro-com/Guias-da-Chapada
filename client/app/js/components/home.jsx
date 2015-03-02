'use strict';
var React = require('react'),
  	HomeSlider = require('./home/homeSlider.jsx'),
  	HomeContent = require('./home/homeContent.jsx'),
  	HomeOfertas = require('./home/homeOfertas.jsx'),
	Home = React.createClass({

	render: function() {
		console.log(this.props.homeSlide1);
		return (
	<div className="outer_wrap">
		<div className="inner_wrap">
			<div id="container">
				<HomeSlider 
					slide1={this.props.homeSlide1}
					slide2={this.props.homeSlide2}
					slide3={this.props.homeSlide3} />
			</div>
			<div className="content">
				<HomeContent 
					achapadaIntro={this.props.achapadaIntro} 
					quemsomos={this.props.quemsomos}/>
				<HomeOfertas />
				<div className="clear"></div>
			</div>
		</div>
	</div>
		);
	}

});

module.exports = Home;