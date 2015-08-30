import React from "react"
import {Route, DefaultRoute} from "react-router"
import App from "containers/App"
import Main from "containers/Main"
import Home from "views/Home";
import About from "views/About";
import Region from "views/Region";
import Attractions from "views/Attractions";
import Places from "views/Places";
import Gallery from "views/Gallery";
import Map from "views/Map";

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
  <Route handler={App}>
    <Route handler={Main}>
      <Route name="Home" handler={Home} path="/" />
      <Route name="About" handler={About} path="/quem" />
      <Route name="Region" handler={Region} path="/chapada" />
      <Route name="Attractions" handler={Attractions} path="/roteiros" />
      <Route name="Places" handler={Places} path="/onde" />
      <Route name="Gallery" handler={Gallery} path="/galeria" />
    </Route>
    {/*<Route name="login" handler={Login} path="/login" />
    <Route name="register" handler={Register} path="/register" />
    <Route name="logout" handler={Logout} path="/logout" />
    <Route name="admin" handler={Admin} path="/admin">
      <Route name="conteudo" handler={AdminConteudo} path="/admin/conteudo" />
      <Route name="pontos" handler={AdminPontos} path="/admin/pontos" />
      <Route name="agenda" handler={AdminAgenda} path="/admin/agenda" />
      <DefaultRoute handler={AdminConteudo} />
    </Route>*/}
    <Route name="Map" handler={Map} path="/mapa" />
    <DefaultRoute handler={Home} />
  </Route>
);
