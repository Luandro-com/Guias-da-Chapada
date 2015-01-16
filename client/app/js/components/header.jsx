'use strict';

var React = require('react'),
	NavBar = require('./header/navbar.jsx'),

    Header = React.createClass({
      render: function() {
        return (
        	<div className="header">
        		<div className="outer_wrap">
					<div className="inner_wrap">
			    		<div id="header" className="grid_100">
							<div className="grid_40">
								<h1 id="logo"></h1>
			        		</div>
							<div id="social" className="grid_60">
								<div className="social">
									<div className="nav-lang">
										<div>ENGLISH / ESPAÑOL</div>
									</div>
									<ul className="social_icons">
										<li className="mail"><a target="_blank" href="mailto:contato@guiasdachapada.com"></a></li>
										<li className="fb"><a target="_blank" href="https://twitter.com/guias"></a></li>
										<li className="in"><a target="_blank" href="https://www.facebook.com/guias"></a></li>
									</ul>
								</div>
								<div>
									<div className="nav-agenda">Sua agenda está vazia</div>
									<div className="nav-galeria"><a href="">GALERIA</a></div>
								</div>
							</div>
			    		</div>
			    		<NavBar />
			  		</div>
				</div>
        	</div>
        	);

    }
});
module.exports = Header;