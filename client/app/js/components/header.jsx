'use strict';

var React = require('react'),
	Router = require('react-router'),
    Link = Router.Link,
    Clima = require('./header/clima.jsx'),
	NavBar = require('./header/navbar.jsx'),

    Header = React.createClass({
		getInitialState: function() {
			return {
				agenda:'Sua agenda está vazia',
				agendaStyle: 'nav-agenda' 
			};
		},
      render: function() {
        return (
        	<div className="header">
        		<div className="outer_wrap">
					<div className="inner_wrap">
			    		<div id="header" className="grid_100">
			    			<Link to="Home">
								<div className="grid_40">
									<h1 id="logo">Guias da Chapada</h1>
				        		</div>
				        	</Link>	
							<div id="social" className="grid_60">
								<div className="social">
									<div className="nav-lang">
										<Clima/>
									</div>
									<ul className="social_icons">
										<li><a target="_blank" href="mailto:contato@guiasdachapada.com"><span className="icono-mail"></span></a></li>
										<li><a target="_blank" href="https://twitter.com/guias"><span className="icono-facebook"></span></a></li>
										<li><a target="_blank" href="https://www.facebook.com/guias"><span className="icono-instagram"></span></a></li>
									</ul>
								</div>
								<div>
									<div className={this.state.agendaStyle}>{this.state.agenda}</div>
									<div className="nav-galeria"><Link to="galeria">GALERIA</Link></div>
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