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
var Footer = require('./components/footer.jsx');
var Mapa = require('./components/mapa.jsx');
var Auth = require('./components/auth.jsx'),
    Login = require('./components/auth/AuthLogin.jsx'),
    Logout = require('./components/auth/AuthLogout.jsx'),
    Admin = require('./components/auth/AuthAdmin.jsx');

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
            achapadaCultura = snapshot.val().achapada.cultura,
            homeSlide1 = snapshot.val().Slides.slide1,
            homeSlide2 = snapshot.val().Slides.slide2,
            homeSlide3 = snapshot.val().Slides.slide3,
            chamadas = snapshot.val().chamadas;
            console.log(chamadas);

        this.setState({
        homeSlide1 : homeSlide1,
        homeSlide2 : homeSlide2,
        homeSlide3 : homeSlide3,
        quemsomos : quemsomos,
        achapadaIntro : achapadaIntro,
        achapadaCerrado : achapadaCerrado,
        achapadaHistoria : achapadaHistoria,
        achapadaCultura : achapadaCultura,
        chamadas : chamadas
      });
      }.bind(this));
    },
    getInitialState: function() {
      this.loadData();
      return {
        quemsomos : "...",
        achapadaIntro : "...",
        homeSlide1 : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "nome":"Guias da Chapada"},
        homeSlide2 : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "nome":"Guias da Chapada"},
        homeSlide3 : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "nome":"Guias da Chapada"},
        chamadas : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "titulo":"...", "texto": "..."}
      };
    },

    render: function () {
      var name = this.getRoutes().reverse()[0].name;

        return (
          <div>
            <div id="wrapper">
              <div className="right_grass"></div>
              <div className="left_grass"></div>
              <Header />
              <div className="clear"></div>
              <RouteHandler
                homeSlide1={this.state.homeSlide1}  
                homeSlide2={this.state.homeSlide2}
                homeSlide3={this.state.homeSlide3}
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
    <Route handler={Auth} path="/auth" >
      <Route name="login" handler={Login} path="/login" />
      <Route name="logout" handler={Logout} path="/logout" />
      <Route name="admin" handler={Admin} path="/admin" />
    </Route>
    <Route handler={Mapa} name="mapa" path="/mapa" />    
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
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