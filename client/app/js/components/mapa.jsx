'use strict';
var React = require('react/addons'),
	MapaHeader = require('./mapa/mapaHeader.jsx'),
	MapaMap = require('./mapa/mapaMap.jsx'),
	Mapa = React.createClass({
		render: function() {
			return (
				<div>
					<div id="wrapper">
						<div classNameName="outer_wrap">
							<div classNameName="inner_wrap">
								<MapaHeader />
				    			<div classNameName="clear"></div>
				    			<MapaMap />
							</div>
						</div>
					</div>
					<div className="infobox-wrapper">
				    <div id="infobox1">
			        	<div className="box-title">
			        		<h3>Cachoeira do Macaco</h3>
			        	</div>
			        	<img src="dist/img/slide.jpg" alt="" />
			        	<div className="grid_100">
			        		<div className="grid_20 ">
				        		4x4
				        	</div>
				        	<div className="grid_20 ">
				        		1 DIA
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
			        	</div>
			        	<div className="grid_100">
			        		<div className="grid_20 ">
				        		omg
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
				        	<div className="grid_20 ">
				        		omg
				        	</div>
			        	</div>
				    </div>
				</div>
				</div>
			);
		}

});

module.exports = Mapa;