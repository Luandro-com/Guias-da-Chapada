'use strict';

var React = require('react'),
	Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,

    NavBar = React.createClass({
      render: function() {
        return (
			<nav>
      			<div id="navigation" className="grid_100">
        			<div>
        				<ul className="word-rotate">
        					<a><Link to="app"><li>Mapa Interativo</li></Link></a>
							<a><Link to="quem"><li>Quem Somos</li></Link></a>
							<a><Link to="chapada"><li>A Chapada</li></Link></a>
							<a><Link to="roteiros"><li>Roteiros e Atrativos</li></Link></a>
							<a><li id="menu-item-32">Onde Fica e Comer</li></a>
							<RouteHandler/>
						</ul>
					</div>			
					<div className="clear"></div>
				</div>
    		</nav>
        	)
      }
    });

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="quem" handler={Quem}/>
    <Route name="chapada" handler={Chapda}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});


module.exports = NavBar;