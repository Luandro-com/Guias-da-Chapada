'use strict';

var React = require('react'),
	TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route
  , Location = Router.Location
  , DefaultRoute = Router.DefaultRoute;
//Meus componentes
var Main = require('./main.jsx');
var Home = require('./components/home.jsx');
var Quem = require('./components/quem.jsx');
var Chapada = require('./components/chapada.jsx');
var Roteiros = require('./components/roteiros.jsx');
var Onde = require('./components/onde.jsx');
var Galeria = require('./components/galeria.jsx');
var Mapa = require('./components/mapa.jsx');
var Login = require('./components/auth/authLogin.jsx'),
    Logout = require('./components/auth/authLogout.jsx'),
    Register = require('./components/auth/authRegister.jsx'),
    Admin = require('./components/auth/authAdmin.jsx'),
    AdminConteudo = require('./components/auth/adminConteudo.jsx'),
    AdminPontos = require('./components/auth/adminPontos.jsx'),
    AdminAgenda = require('./components/auth/adminAgenda.jsx');

var App = React.createClass({
	mixins: [ Router.State ],
  Displayname: "Guias da Chapada App",
    loadData: function () {
      var myFirebaseRef = new Firebase(this.props.url);
      myFirebaseRef.on("value", function(snapshot) {
        var conteudoSlides = snapshot.val().conteudo.slides,
            conteudoQuemsomos = snapshot.val().conteudo.quemsomos,
            conteudoAchapada = snapshot.val().conteudo.achapada,
            conteudoChamadas = snapshot.val().conteudo.chamadas,
            mapa = snapshot.val().mapa;
        this.setState({
          conteudoSlides: conteudoSlides,
          conteudoQuemsomos: conteudoQuemsomos,
          conteudoAchapada: conteudoAchapada,
          conteudoChamadas: conteudoChamadas,
          mapa: mapa
        });    
      }.bind(this));

      },
    getInitialState: function() {
      this.loadData();
      return {
        conteudoSlides: {
            "slide1" : {
              "img" : "https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050",
              "nome" : "Bem Vindos"
            }
        },
        conteudoQuemsomos: "carregando...",
        conteudoAchapada: {
          "cerrado" : "carregando...",
          "cultura" : "carregando...",
          "historia" : "carregando...",
          "intro" : "carregando..."
        }
      }
    },    
    render: function () {
    	var name = this.getRoutes().reverse()[0].name;

        return (
            <div className="map-container">
		          <RouteHandler 
                slides={this.state.conteudoSlides}
                quemsomos={this.state.conteudoQuemsomos} 
                achapada={this.state.conteudoAchapada}
                chamadas={this.state.conteudoChamadas}
                mapa={this.state.mapa}
                url={this.props.url} />
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
    <Route name="login" handler={Login} path="/login" />
    <Route name="register" handler={Register} path="/register" />
    <Route name="logout" handler={Logout} path="/logout" />
    <Route name="admin" handler={Admin} path="/admin">
      <Route name="conteudo" handler={AdminConteudo} path="/admin/conteudo" />
      <Route name="pontos" handler={AdminPontos} path="/admin/pontos" />
      <Route name="agenda" handler={AdminAgenda} path="/admin/agenda" />
      <DefaultRoute handler={AdminConteudo} />
    </Route>
    <Route handler={Mapa} name="mapa" path="/mapa" />    
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler url={'https://guias.firebaseio.com/'} />, document.getElementById('app'));
});

/**
/*
App
  -Main {conteudo, agenda}
    --Header
      ---Agenda
      ---Clima
    --Footer
      ---Instafeed
    --Home
      ---Slider
        ----Slides {slides}
          -----Slide[] {img, nome}
      ---Content {achapadaIntro, quemsomos}
      ---Ofertas {chamadas}
        ----Bloco [chamada]
          -----Oferta {img, nome}
    --Quem
    --A Chapada
    --Roteiros e Atrativos
    --Onde ficar 
    --Galeria
      ---Instafeed
  -Mapa {mapa}
    --MapaHeader
    --MapaMap
    --Ma    
  -Auth {conteudo, mapa, users}
    --Login
    --Logout
    --Admin
      ---Conteudo {conteudo}
        ----Slider {slides}
        ----Textos {quesomos, achapada}
        ----Ofertas {chamadas}
      ---Pontos {mapa}
      ---Agenda
  
var myFirebaseRef = new Firebase(this.props.url);
       myFirebaseRef.child("conteudo").on("value", function(snapshot) {
        var quemsomos = snapshot.val().quemsomos,
            achapadaIntro = snapshot.val().achapada.intro,
            achapadaCerrado = snapshot.val().achapada.cerrado,
            achapadaHistoria = snapshot.val().achapada.historia,
            achapadaCultura = snapshot.val().achapada.cultura,
            slides = snapshot.val().slides,
            chamadas = snapshot.val().chamadas;
        this.setState({
        slides: slides,
        quemsomos : quemsomos,
        achapadaIntro : achapadaIntro,
        achapadaCerrado : achapadaCerrado,
        achapadaHistoria : achapadaHistoria,
        achapadaCultura : achapadaCultura,
        chamadas : chamadas
      });
      }.bind(this));
*/