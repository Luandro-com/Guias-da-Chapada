"use strict";

var React = require('react'),
    Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute;

var App = require('./app.jsx');
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

module.exports = routes;