'use strict';

//React
var React = require('react'),
	TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route
  , Link = Router.Link
  , Location = Router.Location
  , DefaultRoute = Router.DefaultRoute;
//Meus componentes
var Header = require('./components/header.jsx');
var Home = require('./components/home.jsx');
var Quem = require('./components/quem.jsx');
var Chapada = require('./components/chapada.jsx');
var Roteiros = require('./components/roteiros.jsx');
var Onde = require('./components/onde.jsx');
var Galeria = require('./components/galeria.jsx');
{/** var Auth = require('./components/auth.jsx'),
    Login = require('./components/auth/AuthLogin.jsx'),
    Logout = require('./components/auth/AuthLogout.jsx'),
    Admin = require('./components/auth/AuthAdmin.jsx'); */}

var App = React.createClass({
	mixins: [ Router.State ],
  Displayname: "Guias da Chapada App",

    render: function () {
    	var name = this.getRoutes().reverse()[0].name;

        return (
            <div className="map-container">
		          <RouteHandler />
            </div>
        );
    }
});
var Main = React.createClass({
  mixins: [ Router.State ],
    loadData: function () {
      var myFirebaseRef = new Firebase("https://guias.firebaseio.com/");
       myFirebaseRef.child("conteudo").on("value", function(snapshot) {
        var quemsomos = snapshot.val().quemsomos,
            achapadaIntro = snapshot.val().achapada.intro,
            achapadaCerrado = snapshot.val().achapada.cerrado,
            achapadaHistoria = snapshot.val().achapada.historia,
            achapadaCultura = snapshot.val().achapada.cultura;

        this.setState({
        quemsomos : quemsomos,
        achapadaIntro : achapadaIntro,
        achapadaCerrado : achapadaCerrado,
        achapadaHistoria : achapadaHistoria,
        achapadaCultura : achapadaCultura
      });
      }.bind(this));
    },
    getInitialState: function() {
      this.loadData();
      return {
        quemsomos : "...",
        achapadaIntro : "..."
      };
    },

    render: function () {
      var name = this.getRoutes().reverse()[0].name;

        return (
          <div>
            <div id="wrapper">
              <Header />
              <div className="clear"></div>
              <RouteHandler 
                achapadaIntro={this.state.achapadaIntro} 
                achapadaCerrado={this.state.achapadaCerrado}
                achapadaHistoria={this.state.achapadaHistoria}
                achapadaCultura={this.state.achapadaCultura}
                quemsomos={this.state.quemsomos} />
              <Footer />
            </div>
            <div className="luandro-footer"><a href="http://luandro.com">desenvolvido por Luandro</a></div>
          </div>  
        );
    }
}); 
var routes = (
  <Route handler={App}>
    <Route handler={Main}>
      <Route name="Home" handler={Home} path="/" />
      <Route name="quem" handler={Quem} path="/quem" />
      <Route name="chapada" handler={Chapada} path="/chapada" />
      <Route name="roteiros" handler={Roteiros} path="/roteiros" />
      <Route name="onde" handler={Onde} path="/onde" />
      <Route name="galeria" handler={Galeria} path="/galeria" />
      
    </Route>
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

/**
/*
- NavBar
-- Agenda {TODO}
-- Langs {TODO}
-- Menu Itens *
- Home *
-- Slider *
-- Slider atrações *
-- Slider galeria * 
- Chapada
-- Tabs {TODO}
- Roteiros e Onde
-- Info boxes c/ tooltips {TODO}
-- Filter {TODO}
- Galeria {TODO}
- Footer
-- Picture List 
--- Picture

*/