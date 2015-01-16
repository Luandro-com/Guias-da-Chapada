'use strict';

//React
var React = require('react'),
	TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
window.React = React;
//Superagent
var request = require('superagent');
//Material UI
// var mui = require('material-ui-sass');
//Router
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route
  , Link = Router.Link
  , DefaultRoute = Router.DefaultRoute;
//ReactBootstrap
var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav
  , Carousel = require('react-bootstrap').Carousel
  , CarouselItem = require('react-bootstrap').CarouselItem; 
//Meus componentes
var Header = require('./components/header.jsx');
var Home = require('./components/home.jsx');
var Quem = require('./components/quem.jsx');
var Chapada = require('./components/chapada.jsx'),
    Cerrado = Chapada.Cerrado,
    Historia = Chapada.Historia,
    Cultura = Chapada.Cultura;
var Roteiros = require('./components/roteiros.jsx');
var Onde = require('./components/onde.jsx');
var Galeria = require('./components/galeria.jsx');
var Footer = require('./components/footer.jsx');

var App = React.createClass({
	mixins: [ Router.State ],

    render: function () {
    	var name = this.getRoutes().reverse()[0].name;

        return (
            <div>
            	<Header />
            	<div className="clear"></div>
		          <RouteHandler />
            	<Footer />
            </div>
        );
    }
});
var routes = (
  <Route handler={App}>
    <Route name="Home" handler={Home} />
    <Route name="Quem" handler={Quem} />
    <Route name="Chapada" handler={Chapada} >
      <Route name="cerrado" handler={Cerrado} />
      <Route name="historia" handler={Historia} />
      <Route name="cultura" handler={Cultura} />
    </Route>  
    <Route name="Roteiros" handler={Roteiros} />
    <Route name="Onde" handler={Onde} />
    <Route name="Galeria" handler={Galeria} />
    <DefaultRoute handler={Home} />
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

/*
- NavBar
-- Agenda
-- Langs
-- Menu Itens
- Home
-- Slider
-- Slider atrações
-- Slider galeria
- Footer
-- Picture List
--- Picture
- Tabs a Chapada
- Roteiros
-- Info boxes c/ tooltips
*/